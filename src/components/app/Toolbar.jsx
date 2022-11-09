import { useContext, useEffect } from "react";
import { Menu, Transition, Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { SettingsContext } from "../../context/settings";
import { useLocation } from "react-router-dom";
import { TimeContext } from "../../context/timer";

const Toolbar = () => {
  const location = useLocation();

  const [settings, setSettings] = useContext(SettingsContext);
  const [time, reduceTime, resetTime] = useContext(TimeContext);
  console.log(location.pathname);
  const fmt = (num) => (num < 10 ? "0" + num : num);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.minutes == 0 && time.seconds == 0) {
        clearInterval(timer);
      } else {
        reduceTime();
      }
      if (location.pathname == "/games") {
        clearInterval(timer);
        resetTime();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [location.pathname]);

  // settings
  let localSettings = settings;
  const changeSettings = (setting, val) => {
    localSettings[localSettings.indexOf(setting)].value = val;
    setSettings([...localSettings]);
  };

  return (
    <nav className="fixed top-0 px-6 lg:px-0 w-full bg-white z-50">
      <div className="max-w-5xl mx-auto w-full py-4 text-gray-700 font-medium flex justify-between relative">
        <Link to={"/games"}>Maths</Link>
        <div className="flex text-gray-500">
          {location.pathname != "/games" && (
            <div>
              {fmt(time.minutes)}:{fmt(time.seconds)}
            </div>
          )}

          {location.pathname == "/games" && (
            <Menu>
              {({ open }) => (
                <div>
                  <Menu.Button>
                    <Cog6ToothIcon
                      className={`h-6 ml-8 transition ${
                        open ? "rotate-45" : ""
                      }`}
                    />
                  </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition-opacity ease-in"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Menu.Items
                      as="ul"
                      className="h-56 w-64 -bottom-56 bg-gray-100 rounded shadow right-0 md:-right-10 absolute p-4"
                      static
                    >
                      {settings.map((setting) => (
                        <li className="p-4" key={setting.name}>
                          <div className="flex justify-between items-baseline">
                            <label htmlFor="countdown">{setting.name}</label>
                            {typeof setting.value == "boolean" && (
                              <Switch
                                name="countdown"
                                checked={setting.value}
                                onChange={(val) => changeSettings(setting, val)}
                                className={`${
                                  setting.value ? "bg-gray-600" : "bg-gray-200"
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                              >
                                <span className="sr-only">
                                  Enable {setting.name}
                                </span>
                                <span
                                  className={`${
                                    setting.value
                                      ? "translate-x-6"
                                      : "translate-x-1"
                                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                              </Switch>
                            )}
                            {typeof setting.value != "boolean" && (
                              <div className="flex gap-2">
                                <input
                                  type="number"
                                  className="w-14 py-1 px-2 rounded-sm bg-gray-50"
                                  value={setting.value.minutes}
                                  onChange={(e) =>
                                    changeSettings(setting, {
                                      minutes: e.target.value,
                                      seconds: setting.value.seconds,
                                    })
                                  }
                                />
                                :
                                <input
                                  type="number"
                                  className="w-14 py-1 px-2 rounded-sm bg-gray-50"
                                  value={setting.value.seconds}
                                  onChange={(e) =>
                                    changeSettings(setting, {
                                      minutes: setting.value.minutes,
                                      seconds: e.target.value,
                                    })
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                      <Menu.Item
                        as="button"
                        className=" bg-gray-800 hover:bg-gray-900 rounded text-center w-full py-2 mt-8 text-gray-100"
                      >
                        Close
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </div>
              )}
            </Menu>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
