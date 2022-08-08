import { useForm } from '../../hooks/useForm';

import styles from './userForm.module.css';
export const UserForm = () => {
  const initialState = {
    formInput: {
      name: '',
      age: 0
    }
  };
  const { form, onInputChange } = useForm(initialState);

  const onSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className={styles.userFormContainer}>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formController}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Name" value={form.name} onChange={onInputChange} />
        </div>

        <div className={styles.formController}>
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" placeholder="Age" value={form.age} onChange={onInputChange} />
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};
