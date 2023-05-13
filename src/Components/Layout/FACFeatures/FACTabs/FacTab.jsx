import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import FacCreditCard from "./FacCreditCard";
import FacDebitCard from "./FacDebitCard";
import FacPrepaidCard from "./FacPrepaidCard";
import FacGiftCard from "./FacGiftCard";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="font-bcd">{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FacTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const textStyles = {
    fontFamily: "font-bcd",
    fontSize: "text-2xl",
    letterSpacing: "tracking-abc",
    primary: "#d32f2f",
    "&:hover": {
      Text: "#d32f2f",
    },
  };

  return (
    <>
      <section className="sm:mt-6 pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                borderWidth: "100%",
                fontFamily: "sans-serif",
              }}
            >
              <Tabs
                sx={textStyles}
                centered
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                  }}
                  label="credit cards"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                  }}
                  label="debit cards"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                  }}
                  label="prepaid cards"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                  }}
                  label="gift cards"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <FacCreditCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <FacDebitCard />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FacPrepaidCard />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <FacGiftCard />
            </TabPanel>
          </Box>
        </div>
      </section>
    </>
  );
}
