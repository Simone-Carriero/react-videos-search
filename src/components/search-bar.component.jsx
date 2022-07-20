import { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'


const SearchBar = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')
    
    const handleChange = ({ target }) => {
        setSearchTerm(target.value)
    }


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSubmit(searchTerm)
        }
    }
    
    return (
    <Paper elevation={6} style={{padding: ".6rem"}}>
        <TextField 
              fullWidth
              label="Search..."
              onChange={handleChange}
              value={searchTerm}
              onKeyDown={handleKeyDown}
        />
    </Paper>
  )
}

export default SearchBar