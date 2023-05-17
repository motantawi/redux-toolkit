import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/features/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const data = useSelector((state) => state.users.data);

  return (
    <section className="users">
      <button onClick={() => dispatch(getUsers())} disabled={loading}>
        {" "}
        {!loading ? "Get Users" : "Loading ..."}{" "}
      </button>

      <ul>
        {data.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </section>
  );
}
