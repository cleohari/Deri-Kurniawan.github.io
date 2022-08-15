import { icons } from "../assets";
import CommandLineApp from "../comps/CommandLineApp";
import { newActiveWindow } from "./feat/desktopSlice";

const WIN_FEATURES =
  "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=50,width=1200,height=500";

const initialState = {
  activeWindows: [],
  pinnedApps: [
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      width: 25,
      height: 25,
      onClick: () => null,
    },
    {
      name: "WhatsApp",
      icon: icons.apps.whatsapp,
      width: 28,
      height: 28,
      onClick: () => {
        const textMessage = encodeURIComponent(
          "Hello Deri Kurniawan!, [your message here]"
        );
        window.open(
          `https://wa.me/+6285720959031?text=${textMessage}`,
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://google.com", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      width: 28,
      height: 28,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
  ],
  shortcutApps: [
    {
      name: "Google Chrome",
      icon: icons.apps.chrome,
      onClick: () => {
        window.open("https://google.com", "_blank", WIN_FEATURES);
      },
    },
    {
      name: "GitHub",
      icon: icons.apps.github,
      onClick: () => {
        window.open(
          "https://github.com/deri-kurniawan",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "LinkedIn",
      icon: icons.apps.linkedin,
      onClick: () => {
        window.open(
          "https://linkedin.com/in/deri-kurniawan",
          "_blank",
          WIN_FEATURES
        );
      },
    },
    {
      name: "Visual Studio Code",
      icon: icons.apps.vscode,
      onClick: () => {
        window.open("https://vscode.dev", "_blank", WIN_FEATURES);
      },
    },
    // {
    //   name: "WhatsApp",
    //   icon: icons.apps.whatsapp,
    //   onClick: () => {
    //     window.open(
    //       "https://wa.me/+6285720959031?text=Hello%20there%20from%20the%20desktop%20app!",
    //       "_blank",
    //       WIN_FEATURES
    //     );
    //   },
    // },
    {
      name: "Command Prompt",
      icon: icons.apps.winCMD,
      onClick: (e, dispatch) => {
        dispatch(
          newActiveWindow({
            title: "C:\\Windows\\system32\\cmd.exe",
            height: "80vh",
            width: "80vw",
            x: 10,
            y: 10,
            minimized: false,
            maximized: false,
            Component: CommandLineApp,
          })
        );
      },
    },
    {
      name: "Windows Defender",
      icon: icons.apps.winDefender,
      onClick: () => null,
    },
    {
      name: "File Explorer",
      icon: icons.apps.winFileExplorer,
      onClick: () => null,
    },
    {
      name: "Mail",
      icon: icons.apps.winMail,
      onClick: () => (window.location.href = "mailto:deri.netuchi@gmail.com"),
    },
    {
      name: "Search",
      icon: icons.apps.winSearch,
      onClick: () => null,
    },
    {
      name: "Settings",
      icon: icons.apps.winSettings,
      onClick: () => null,
    },
    {
      name: "Trash Full",
      icon: icons.apps.winTrashFull,
      onClick: () => null,
    },
  ],
};

export default initialState;
