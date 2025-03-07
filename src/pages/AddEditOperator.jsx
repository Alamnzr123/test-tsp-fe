import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    getKaryawans,
    getKaryawan,
    getOperators,
    getOperator,
    editOperator
} from "../store/actionCreator";
import { IS_EDIT, GET_KARYAWAN, GET_OPERATOR } from "../store/actionType";

const AddEditOperator = () => {
    const dispatch = useDispatch();
    const { operator } = useSelector(
        (state) => state.operatorReducer
    );
    const { isEdit } = useSelector((state) => state.karyawanReducer);
    const { karyawan } = useSelector((state) => state.karyawanReducer);

    const navigate = useNavigate();
    const { id } = useParams();

    const [newKaryawan, setNewKaryawan] = useState({
        nama_operator: "",
        nama_product: "",
        jumlah: "",
        status: "",
        role: ""
    });

    const updateKaryawan = () => {
        dispatch(editOperator(id, newKaryawan));
        navigate("/operator");
    };

    const handleCancel = () => {
        // console.log("cancel");
        setNewKaryawan({
            nama_operator: "",
            nama_product: "",
            jumlah: "",
            status: "",
            role: ""
        });
        dispatch({
            type: IS_EDIT,
            payload: false,
        });
        dispatch({
            type: GET_OPERATOR,
            payload: {},
        });
    };

    useEffect(() => {
        dispatch(getOperator(id));
    }, []);

    useEffect(() => {
        if (operator.id) {
            setNewKaryawan({
                nama_operator: karyawan.nama_operator,
                nama_product: karyawan.nama_product,
                jumlah: karyawan.jumlah,
                status: karyawan.status,
                role: karyawan.role
            });
        }
    }, [operator]);


    return (
        <div className="overflow-x-auto px-10 flex flex-col gap-5">
            <div className="flex flex-row justify-center">
                <h1>
                    <span className="font-bold text-2xl">
                        Add/Edit Operator
                    </span>
                </h1>
            </div>
            <form className="flex flex-col gap-5">
                <div className="flex flex-row">
                    <div className="flex flex-col w-1/2 gap-4">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Input your name"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => {
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        name: e.target.value,
                                    });
                                }}
                                defaultValue={isEdit ? newKaryawan.name : ""}
                                required
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        age: e.target.value,
                                    })
                                }
                                defaultValue={isEdit ? newKaryawan.age : 0}
                                required
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        role: e.target.value,
                                    })
                                }
                                defaultValue={isEdit ? newKaryawan.age : "Role"}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2 gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="form-control flex flex-col">
                                <label className="label cursor-pointer w-14">
                                    <span className="label-text">L</span>
                                    <input
                                        type="radio"
                                        name="radio-10"
                                        value={"L"}
                                        className="radio checked:bg-red-500"
                                        onChange={(e) => {
                                            // console.log(e.target.value);
                                            setNewKaryawan({
                                                ...newKaryawan,
                                                gender: e.target.value,
                                            });
                                        }}
                                        checked={newKaryawan.gender == "L"}
                                    />
                                </label>
                                <label className="label cursor-pointer w-14">
                                    <span className="label-text">P</span>
                                    <input
                                        type="radio"
                                        name="radio-10"
                                        value={"P"}
                                        className="radio checked:bg-blue-500"
                                        onChange={(e) => {
                                            // console.log(e.target.value);
                                            setNewKaryawan({
                                                ...newKaryawan,
                                                gender: e.target.value,
                                            });
                                        }}
                                        checked={newKaryawan.gender == "P"}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Tanggal Lahir
                                </span>
                            </label>
                            <input
                                type="date"
                                defaultValue={
                                    isEdit
                                        ? newKaryawan.tanggal_lahir
                                        : new Date().toISOString().slice(0, 10)
                                }
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) =>
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        tanggal_lahir: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Alamat</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                placeholder="alamat"
                                onChange={(e) => {
                                    setNewKaryawan({
                                        ...newKaryawan,
                                        alamat: e.target.value,
                                    });
                                }}
                                required
                                defaultValue={isEdit ? newKaryawan.alamat : ""}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="modal-action">
                    {isEdit ? (
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => {
                                updateKaryawan();
                            }}
                        >
                            Update
                        </button>
                    ) : (
                        <button
                            className="btn btn-active btn-primary"
                            type="button"
                            onClick={() => {
                                handleAddKaryawan();
                            }}
                        >
                            Add
                        </button>
                    )}
                    <Link to="/karyawan">
                        <button
                            className="btn btn-active"
                            onClick={() => {
                                handleCancel();
                            }}
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default AddEditOperator;
