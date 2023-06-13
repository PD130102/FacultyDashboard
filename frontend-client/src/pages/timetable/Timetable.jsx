import "./timetable.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {React, useState, useEffect } from "react";

const Timetable = () => {
    const [fileList, setFileList] = useState();
    const [file, setFile] = useState();
    const [paperList, setPaperList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:6969/api/timetables").then((res) => {
            console.log(res.data);
            setPaperList(res.data);
        });
    }, []);


    const handlefilechanges = (e) => {
        setFileList(e.target.files);
        console.log(e.target.files);
    };

    const handlefilechange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0]);
    };

    const handleUploadMutiple = (e) => {
        e.preventDefault();
        if (!fileList) {
            toast.error("Please select a file");
            return;
        }
        const data = new FormData();
        Array.from(fileList).forEach((file, i) => {
            data.append("files", file, file.name);
        });
        axios.post("http://localhost:6969/api/upload/multiple/timetable", data).then((res) => {
            console.log(res);
            toast.success("File uploaded successfully");
        })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong");
            });
    };
    const handleUpload = (e) => {
        e.preventDefault();
        if (!file) {
            toast.error("Please select a file");
            return;
        }
        const data = new FormData();
        data.append("file", file, file.name);
        axios
            .post("http://localhost:6969/api/upload/timetable", data)
            .then((res) => {
                console.log(res);
                toast.success("File uploaded successfully");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong");
            });
    };

    return (
        <div className="paper">
            <Sidebar />
            <div className="paperContainer">
                <Navbar />
                <div className="paperWrapper">
                    <div className="title">Time Table Uploads</div>
                    <div className="upload-form">
                        <form>
                            <div className="form-group">
                                <div className="single">
                                    <label>Single Timetable Upload </label>
                                    <input
                                        type="file"
                                        name="file"
                                        className="upload-input"
                                        onChange={handlefilechange}
                                    />
                                    <button className="upload-button" onClick={handleUpload}>
                                        Upload Single
                                    </button>
                                </div>
                                <br />
                                <div className="multiple">
                                    <label>Multpile Timetables Upload </label>
                                    <input
                                        type="file"
                                        name="file"
                                        className="upload-input"
                                        onChange={handlefilechanges}
                                        multiple
                                    />
                                    <button
                                        className="upload-button"
                                        onClick={handleUploadMutiple}
                                    >
                                        Upload Multiple
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="paperlist">
                    <div className="title">Time Table List</div>
                    <div>
                        {paperList.map((file) => (
                            <div key={file.name}>
                                <h4>{file.name}</h4>
                                <p>URL: {file.url}</p>
                                <p>Type: {file.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Timetable;