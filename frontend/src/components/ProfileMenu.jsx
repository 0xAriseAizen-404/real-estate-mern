import { Menu, Button, Text, rem, Avatar } from "@mantine/core";

export const ProfileMenu = ({ user, logout }) => {
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture} alt="User avatar" radius="xl" />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Favourites</Menu.Item>
        <Menu.Item>Bookings</Menu.Item>
        <Menu.Item onClick={() => {
            localStorage.clear();
            logout();
        }}>LogOut</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
