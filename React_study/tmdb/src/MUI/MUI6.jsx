import AddReactionIcon from '@mui/icons-material/AddReaction'
import CakeIcon from '@mui/icons-material/Cake'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
function MUI6() {
   return (
      <div>
         <AddReactionIcon />
         <CakeIcon />
         <IconButton aria-label="delete">
            <CakeIcon />
            <DeleteIcon />
         </IconButton>
      </div>
   )
}
export default MUI6