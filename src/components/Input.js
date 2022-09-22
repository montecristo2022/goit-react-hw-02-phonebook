// import React from 'react';
// import { Component } from 'react';
// import shortid from 'shortid';


// class Input extends Component {
//   state = {
//     name: '',
//     tag: '',
//       experience: 'junior',
//     licence: false,
//   };

//   nameInputid = shortid.generate();
//   tagId = shortid.generate();

//   //   handleInputChange = event => {
//   //     console.log(event.target.value);

//   //     this.setState({ name: event.target.value });
//   //   };

//   //   hangleTag = event => {
//   //     console.log(event.target.tag);

//   //     this.setState({ tag: event.target.value });
//   //     };

//   handleChange = event => {
//     // console.log(event.target)
//     // console.log(event.target.value)
//     // console.log(event.target.name)

//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//     };
    

//     handleLicenceChange = event => {
//         console.log(event.target.checked)
//         this.setState({licence: event.target.checked})
// }


//   handleSubmit = event => {
//     event.preventDefault();
//     console.log(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', tag: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label htmlFor={this.nameInputid}>
//           Имя{' '}
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleChange}
//             name="name"
//             id={this.nameInputid}
//           ></input>
//         </label>

//         <label htmlFor={this.tagId}>
//           Кличка{' '}
//           <input
//             type="text"
//             value={this.state.tag}
//             onChange={this.handleChange}
//             name="tag"
//             id={this.tagId}
//           ></input>
//         </label>

//         <p>Ваш уровень?</p>
//         <label>
//                 <input
                    
//             type="radio"
//             name="experience"
//             value="junior"
//                     onChange={this.handleChange}
//                     // checked={this.state.experience === 'junior'}
//           />
//           junior
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="junior"
//                     onChange={this.handleChange}
//                     // checked={this.state.experience === 'middle'}
//           />
//           middle
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="experience"
//             value="junior"
//                     onChange={this.handleChange}
//                     //  checked={this.state.experience === 'senior'}
//           />
//           senior
//             </label>
            





















//             <label>
//                 <input type="checkbox" name="licence" checked={this.state.licence} onChange={this.handleLicenceChange} /> Согласен с условиями
                
//             </label>


//         <button type="submit" disabled={!this.state.licence} >Отправить</button>
//       </form>
//     );
//   }
// }

// export default Input;
