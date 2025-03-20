import { Box, Card, Link, Typography } from "@mui/material";
import { CustomTemplateProps } from "../types";

function Template(props: CustomTemplateProps) {
  const { children, kcContext, i18n } = props;
  const { realm } = kcContext;
  const { msgStr } = i18n;

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
      <Box width="400px">
        <Card>{children}</Card>
        <Box display="flex">
          <Typography>{realm.displayName}</Typography>
          <Typography marginLeft="auto" href={kcContext.properties.THEME_FAQ_PAGE} component={Link}>
            {msgStr("faqPage")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export { Template };
