import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';

export default ()=>{
    return <>
          <Paper style={{padding:20,
            background:"#F3F3F3",
            borderRadius: "6px",
            }}>
                
    <Typography variant="subtitle1" component="h6"
          style={{
            textTransform: "uppercase",
            fontFamily: 'Work Sans',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "16px",
        }}
          >Introduction</Typography>
          <Typography variant="h4" component="h4" align="left">
              Introduction to Code
              </Typography>
              <ul>
                  <li>
                      HTML
                  </li>
                  <li>
                      CSS
                  </li>
                  <li>
                        ₹160 / week
                  </li>
              </ul>
          </Paper>
          </>
}