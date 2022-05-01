import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";

const languages = {
  "en-US": { label: "EN", dir: "ltr", active: true },
  es: { label: "ES", dir: "ltr", active: false },
};

function LanguageSelect() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const selected = localStorage.getItem("i18nextLng") || "en";
  const { t } = useTranslation();

  return (
    <div>
      <Button
        className="text-white"
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
      >
        <Typography variant="caption" color="common.white">
          <ArrowDropDown fontSize="small" />
        </Typography>
        <Typography variant="caption" color="common.white">
          {languages[selected].label}
        </Typography>
      </Button>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
      >
        <div>
          <List>
            <ListSubheader>{t("navbar_language")}</ListSubheader>
            {Object.keys(languages)?.map((item) => (
              <ListItem
                button
                key={item}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languages[item].label}
              </ListItem>
            ))}
          </List>
        </div>
      </Popover>
    </div>
  );
}

export default LanguageSelect;
