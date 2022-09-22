import React from 'react';
import { Component } from 'react';
// import shortid from 'shortid';
import styles from '../components/phonebook.module.css';

class Phone extends Component {



  state = {
    contacts: [],
    name: '',
    number: '',
  };


handleSubmit = evt => {
    evt.preventDefault();
    console.log(`Контактные данные => Имя: ${this.state.name} Номер: ${this.state.number}`);
  // this.props.onSubmit(this.state);
  //  this.setState({ name: '', number: '' });

    // Проп который передается форме для вызова при сабмите
    // 
  };



   handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = event => {
  this.setState({ number: event.target.value });
}



  render() {
    return (
      <div >
        <h1 className={styles.mainText}>Телефонная Книга</h1>

        <form onSubmit={this.handleSubmit}>







         
            <p>Имя</p>
            <input 
              value={this.state.name}
              onChange={this.handleChange}
              className={styles.input}
              placeholder="введите имя"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />

            







            <p>Номер</p>
            <input
              value={this.state.number}
              onChange={this.handleChangeNumber}
                        className={styles.input}
                        placeholder="введите номер телефона"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
                    <div>
                          <button type="submit" className={styles.button}>
              Добавить контакт
            </button>
          </div>
      








          <h2 className={styles.contactText}>Контакты</h2>
          <p> {this.state.name} {this.state.number}</p>
          <p>Artem Bagmet 771 40 57</p>
          <p>Antonio Valverde 771 40 25</p>
          <p>Mico Castellani 771 32 98</p>
          
       
        </form>
      </div>
    );
  }
}

export default Phone;
