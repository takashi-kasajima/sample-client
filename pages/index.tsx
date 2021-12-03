import Head from "next/head";
import theme from "../components/theme";
import React, { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { IUser } from "modules/user";
import { getUserList } from "libs/http-client/user";

export default function Index() {
  const [userList, setUserList] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = useCallback(async () => {
    const { userList: _userList } = await getUserList();
    setUserList(_userList);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>sample client</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cuprum:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <style jsx global>
        {`
          body {
            margin: 0;
          }
        `}
      </style>

      <main
        style={{
          margin: 0,
          backgroundColor: "rgb(245, 241, 232)",
        }}
      >
        {userList.map((user) => (
          <div>{user.user_id}</div>
        ))}
      </main>
    </ThemeProvider>
  );
}
