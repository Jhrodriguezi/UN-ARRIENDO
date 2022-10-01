import Navbar from "../navbar/navbar";
import { changeTitle } from "../../utilities/changeTitle";
import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { HoverRating } from "./rating";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const changeImage = () => {
  document.body.style.backgroundImage =
    "url('https://caracoltv.brightspotcdn.com/dims4/default/a881810/2147483647/strip/true/crop/889x500+220+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Ff1%2F0c%2Fe81ace1d411bb8b27f96bd7fcc7c%2Fviejito-01.png')";
};

const jsonprov = [
  { concepto: "mac", importe: 1000 },
  { concepto: "android", importe: 500 },
  { concepto: "IOS", importe: 0 },
  { concepto: "Ruby", importe: 5000 },
];
const results = jsonprov.map(function (elemento) {
  return {
    concepto: elemento.concepto.toUpperCase(),
    importe: elemento.importe,
    importeIva: elemento.importe * 1.21,
  };
});
const cards = results;

const theme = createTheme();

export function Historial() {
  changeTitle("Historial");
  changeImage();
  return (
    <>
      <Box>
        <div className="container">
          <Navbar />
        </div>
        
          <Grid item xs>
            {" "}
            {/* tarjetas */}
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <main>
                {/* Hero unit */}
                <Container sx={{ py: 8 }} maxWidth="md">
                  {/* End hero unit */}
                  <Grid container spacing={3}>
                    {cards.map((card) => (
                      <Grid item xs={6}>
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <CardMedia
                            component="img"
                            sx={{
                              // 16:9
                              pt: "5%",
                            }}
                            image="https://source.unsplash.com/random"
                            alt="random"
                          />
                          <CardContent sx={{ flexGrow: 1 }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.concepto}
                            </Typography>
                            <Typography>{card.importe}</Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Ver más detalles</Button>
                            <Button size="small">Contactar</Button>
                            <HoverRating />
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </main>
            </ThemeProvider>
          </Grid>
      </Box>
    </>
  );
}
