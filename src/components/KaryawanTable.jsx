import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getKaryawans, deleteKaryawan, getKaryawan } from "../store/actionCreator";
import { Link } from "react-router-dom";
import { IS_EDIT } from "../store/actionType";

const KaryawanTable = () => {
    const { karyawans } = useSelector((state) => state.karyawanReducer);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteKaryawan(id));
    }

    const toEdit = (id) => {
        dispatch({
            type: IS_EDIT,
            payload: true
        });
        dispatch(getKaryawan(id));
    }

    useEffect(() => {
        dispatch(getKaryawans());
    }, []);

    return (
        <div className="overflow-x-auto px-10 flex flex-col gap-5">
            <div className="flex flex-row justify-between">
                <h1>
                    <span className="font-bold text-5xl">Karyawan</span>
                </h1>
                <Link to="/add-edit-karyawan">
                    <button className="btn btn-info">Tambah Karyawan</button>
                </Link>
            </div>
            <div>
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="text-xs font-semibold tracking-wide text-zinc-200 uppercase border-b bg-gray-50 text-center">
                        <tr>
                            <th>Nomor</th>
                            <th>Name</th>
                            <th>id_jabatan</th>
                            <th>Work Order</th>
                            <th>Nama Produk</th>
                            <th>Status</th>
                            <th>Jumlah</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    {karyawans.map((karyawan, index) => (
                        <tbody
                            key={index}
                            className="bg-white divide-y text-center"
                        >
                            <tr>
                                <td>{index + 1}</td>
                                <td>{karyawan.name}</td>
                                <td>{karyawan.id_jabatan}</td>
                                <td>{karyawan.work_order}</td>
                                <td>{karyawan.nama_product}</td>
                                <td>{karyawan.status}</td>
                                <td>{karyawan.jumlah}</td>
                                <td>
                                    <Link
                                        to={`/add-edit-karyawan/${karyawan.id}`}
                                    >
                                        <button className="btn btn-ghost btn-xs"
                                            onClick={() => toEdit(karyawan.id)}
                                        >
                                            edit
                                        </button>
                                    </Link>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() =>
                                            handleDelete(karyawan.id)
                                        }
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default KaryawanTable;
