import React from "react";

interface Props {
  name?: string;
}

interface State {
  name: string;
  password: string;
}

class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { name: "", password: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ name: e.currentTarget.value });
  };
  handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ password: e.currentTarget.value });
  };
  handleSubmit(event: React.SyntheticEvent) {
    alert(`A name was submitted: ${this.state.name}
    A password was submitted: ${this.state.password}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="text"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;
