import { TemplateProps } from "keycloakify/login/TemplateProps";
import { I18n } from "./login/i18n";
import { KcContext } from "./kc.gen";

type CustomTemplateProps = Omit<
  TemplateProps<KcContext, I18n>,
  "doUseDefaultCss" | "headerNode"
>;
type CustomPageProps<T> = {
  kcContext: Extract<KcContext, { pageId: T }>;
  i18n: I18n;
  Template: (props: CustomTemplateProps) => JSX.Element;
};

export type { CustomTemplateProps, CustomPageProps };
