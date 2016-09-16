class User < ActiveRecord::Base
	validates :username, presence: true, uniqueness: true
	validates :password, length: { minimum: 7, allow_nil: true }
	after_initialize :ensure_session_token
	attr_reader :password

	has_many :lists, dependent: :destroy
  has_many :cal_dates, dependent: :destroy
	has_many :todos, dependent: :destroy

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return user if user && user.is_password?(password)
		nil
	end

  def dates_with_todos
    dates = cal_dates.select { |date| date.todos.any? }
  end

	def password=(pword)
		self.password_digest = BCrypt::Password.create(pword)
	end

	def is_password?(pword)
		BCrypt::Password.new(password_digest).is_password?(pword)
	end

	def ensure_session_token
		self.session_token ||= get_session_token
	end

	def reset_session_token!
		self.session_token = get_session_token
		self.save!
	end

	private

	def get_session_token
		token = SecureRandom::base64(16)
		while User.exists?(session_token: token)
			token = SecureRandom::base64(16)
		end
		token
	end

end
