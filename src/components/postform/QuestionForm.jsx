import React, { useState } from "react";
import ImageInputBox from "./ImageInputBox/ImageInputBox";
import TextInputBox from "./TextInputBox/TextInputBox";
import classes from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../auth/LoadingSpinner";
const QuestionForm = () => {
    const [question, setQuestion] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [submit, setSubmit] = useState(false);
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();

    // Form input handlers
    const imageHandler = (value) => {
        setImage(value);
    };

    const questionHandler = (value) => {
        setQuestion(value);
    };

    const descriptionHandler = (value) => {
        setDescription(value);
    };

    // Form on submit handlers
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const questionId = uuidv4();
        var today = new Date();
        const publishedDate = today.toLocaleDateString("en-US");
        setSubmit(true);
    };

    return submit ? (
        <LoadingSpinner />
    ) : (
        <>
            <div className={"container-fluid " + classes.questionform}>
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form
                            className={"container " + classes.form}
                            onSubmit={onSubmitHandler}
                        >
                            <div
                                id="post-form"
                                className="d-flex align-items-center justify-content-between"
                            >
                                <h1 className="mt-3 mb-4">
                                    <b>Step 1: </b> Open the thread
                                </h1>
                                <select
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Please select the type of genre this post is related to !"
                                    onChange={(e) => {
                                        setGenre(e.target.value);
                                    }}
                                    className="form-select"
                                    aria-label="Default select example"
                                    style={{
                                        width: "10em",
                                        backgroundColor: "#5cdb95",
                                        fontWeight: "600",
                                        border: "2px solid #5cdb95",
                                        borderColor:
                                            genre === "genre-invalid"
                                                ? "red"
                                                : "",
                                    }}
                                    defaultValue={""}
                                    required
                                >
                                    <option value="" disabled>
                                        Select genre
                                    </option>
                                    <option value="tech">Technology</option>
                                    <option value="gadgets">Gadgets</option>
                                    <option value="coding">Coding</option>
                                    <option value="traveling">Traveling</option>
                                    <option value="movies">Movies</option>
                                    <option value="gaming">Gaming</option>
                                </select>
                            </div>
                            <TextInputBox
                                inputname={"Question"}
                                isAdded={false}
                                onChange={questionHandler}
                                maxLength={200}
                            />
                            <TextInputBox
                                inputname={"Description"}
                                height={"100px"}
                                isAdded={false}
                                onChange={descriptionHandler}
                                maxLength={20000}
                            />
                            <ImageInputBox
                                height={"30vh"}
                                isAdded={false}
                                onChange={imageHandler}
                                inputname={"Attach image"}
                            />
                            <button
                                className="btn btn-primary"
                                type="submit"
                                style={{ marginBottom: "1em" }}
                            >
                                Publish Thread
                            </button>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    );
};

export default QuestionForm;
