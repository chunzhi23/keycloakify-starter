import { Button, CardContent, Grid2 as Grid, TextField, Typography } from "@mui/material";
import { CustomPageProps } from "../../types";

function Login(props: CustomPageProps<"login.ftl">) {
  const { kcContext, i18n, Template } = props;
  const { msgStr } = i18n;
  const { url, realm, messagesPerField } = kcContext;
  const { loginWithEmailAllowed } = realm;

  return (
    <Template kcContext={kcContext} i18n={i18n}>
      <CardContent>
        <Typography variant="h4" textAlign="center" sx={{ marginBottom: "20px" }}>
          {msgStr("doLogIn")}
        </Typography>
        <form action={url.loginAction} method="post">
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                error={messagesPerField.existsError("username")}
                helperText={messagesPerField.getFirstError("username")}
                fullWidth
                name="username"
                label={loginWithEmailAllowed ? msgStr("usernameOrEmail") : msgStr("username")}
              ></TextField>
            </Grid>
            <Grid size={12}>
              <TextField fullWidth name="password" label={msgStr("password")} type="password"></TextField>
            </Grid>
            <Grid size={12}>
              <Button fullWidth variant="contained" type="submit">
                {msgStr("doLogIn")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Template>
  );
}

export { Login };
