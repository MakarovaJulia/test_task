import {Button, colors, styled} from "@mui/material";


export const MainButton = styled(Button)({
  backgroundColor: colors.teal[500],
  color: 'white',
  margin: 5,
  borderRadius: 2,
  maxWidth: "300px",
  "&:hover":{
    backgroundColor: colors.teal[400],
  },
  "&:disabled":{
    backgroundColor: 'gray',
  }
})