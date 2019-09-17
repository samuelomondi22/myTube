import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

// class SearchBar extends Component {
//   state = {
//     searchTerm: ""
//   };

//   handleChange = e => {
//     this.setState({ searchTerm: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { searchTerm } = this.state;
//     const { onFormSubmit } = this.props;

//     onFormSubmit(searchTerm);
//   };
//   render() {
//     return (
//       <Paper elevation={6} style={{ padding: "25px" }}>
//         <form onSubmit={this.handleSubmit}>
//           <TextField fullWidth label="search..." onChange={this.handleChange} />
//         </form>
//       </Paper>
//     );
//   }
// }

// export default SearchBar;

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = e => setSearchTerm(e.target.value);

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="search..."
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;
