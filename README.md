# TÜDÜ

TÜDÜ is a Todo app built with Ruby on Rails and React.

### Landing Page

![landing_page]


### Technical Details

- TÜDÜ renders all of its list and todo components as forms, allowing the
user to easily manipulate them. Upon submission, the todo is defocused, creating
a smooth editing UX. This is accomplished through an on click event that shows
the form as an input field rather than just text.
    nameForm = () => {
      if (this.state.editing) {
        return (
        <form className='name-form' onSubmit={this.handleSubmit}>
          <input
            value={this.state.list.name}
            onChange={this.updateName}
            onBlur={this.toggleEditing}
            autoFocus />
        </form>
        );
      } else {
        return (
        <h1 onClick={this.toggleEditing}>{this.state.list.name}</h1>
        );
      }

    The 'toggleEditing' function merely sets the state "editing" to the opposite
  value and causes a rerender.

- TuDu also always stores a blank form under the list's todos. The form makes
adding a new todo to a list a simple task. Once the user enters the todo into
the form and submits it, the todo is added to the list, the list is rerendered,
and the form input field is cleared. This process moves the form down to the
next line in preparation for adding another todo. The following is the submit
function for the new todo, using the form.

    handleSubmit (e) {
      e.preventDefault();
      ListUtil.createTodo(this.state.todo);
      let newTodo = this.state.todo;
      newTodo.name = '';
      this.setState({todo: newTodo });
    },

  By altering the name and then setting the state to contain an effectively
blank todo object, the input field is cleared. The cleared form then moves down
a row when the list rerenders, keeping the list ordered by when todos were
entered.

### Features

- Users can sign in/sign up with a custom username and password, securely stored in the database.
- The user's personal page shows all todos in user-defined lists.
- Users can create new lists and add todos to them.
- Users can also edit their todos, cross them off, or delete them.
- Users can similarly edit or remove lists, clearing out the linked todos as well.

### To-do (get it?)

- [ ] Allow users to add specific dates for their todos.
- [ ] Implement a calendar system to sort todos by these dates.

[landing_page]: ./app/assets/images/landing_page.png
