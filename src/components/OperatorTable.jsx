import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOperator, getOperators } from "../store/actionCreator";
import { Link } from "react-router-dom";
import { IS_EDIT } from "../store/actionType";

const OperatorTable = () => {
  const { operators } = useSelector((state) => state.operatorReducer);
  const dispatch = useDispatch();

  const toEdit = (id) => {
    dispatch({
      type: IS_EDIT,
      payload: true
    });
    dispatch(getOperator(id));
  }

  useEffect(() => {
    dispatch(getOperators());
  }, []);

  return (
    <div className="overflow-x-auto px-10 flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <h1>
          <span className="font-bold text-5xl">Operator</span>
        </h1>
      </div>
      <div>
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="text-xs font-semibold tracking-wide text-black uppercase border-b bg-gray-50 text-center">
            <tr>
              <th>Id</th>
              <th>Nama Operator</th>
              <th>Nama Produk</th>
              <th>Jumlah</th>
              <th>Status</th>
              <th>Role</th>
              <th>action</th>
            </tr>
          </thead>
          {operators.map((karyawan, index) => (
            <tbody
              key={index}
              className="bg-white divide-y text-center"
            >
              <tr>
                <td>{index + 1}</td>
                <td>{karyawan.nama_operator}</td>
                <td>{karyawan.nama_product}</td>
                <td>{karyawan.jumlah}</td>
                <td>{karyawan.status}</td>
                <td>{karyawan.role}</td>
                <td>
                  <Link
                    to={`/add-edit-operator/${karyawan.id}`}
                  >
                    <button className="btn btn-ghost btn-xs"
                      onClick={() => toEdit(karyawan.id)}
                    >
                      edit
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default OperatorTable;
