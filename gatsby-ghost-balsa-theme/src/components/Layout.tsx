import React from "react";
import "../styles/style.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArmadaFormsProvider } from "../context/form-context";
import { useStaticQuery, graphql } from "gatsby";
import { SettingsAndSlugs } from "../models/settings-and-page-slugs.model";
import Helmet from "react-helmet";

const Layout: React.FC = ({ children }) => {
  // client test = https://drafbox-backend-dev.herokuapp.com/api/project/5ea1575f8c9344001f9a89ff/forms

  const data = useStaticQuery<SettingsAndSlugs>(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          apiUrl
          logoUrl
          siteTitle
          language
          header {
            navigation {
              url
              label
            }
          }
          footer {
            copyright
            navigation {
              label
              url
            }
          }
          subscribeWidget {
            title
            helpText
            successMessage
          }
          socialLinks {
            twitter
            facebook
            instagram
            linkedin
            github
          }
        }
      }
    }
  `);

  return (
    <ArmadaFormsProvider client={process.env.GATSBY_FORM_URL}>
      <Helmet
        htmlAttributes={{
          lang: data.site.siteMetadata.language
            ? data.site.siteMetadata.language
            : "auto",
        }}
      />
      <div>
        <Navbar navbarData={data} />
        <hr />
        {children}
        <Footer footerData={data} />
      </div>
    </ArmadaFormsProvider>
  );
};

export default Layout;
