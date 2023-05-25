const UserForm = () => {
  return (
    <div>
      <form action="/" method="POST">
        <label for="name">Name</label>
        <input type="text" name="name" />

        <label for="email">E-mail</label>
        <input type="text" name="email" />

        <label for="phone">Phone</label>
        <input type="text" name="phone" />

        <label for="address">Address</label>
        <input type="text" name="address" />
      </form>
    </div>
  );
};
export default UserForm;
