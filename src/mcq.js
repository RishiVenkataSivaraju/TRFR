import React, { useState } from 'react';
import axios from "axios"

const QuizForm = () => {
    const [subject, setSubject] = useState('');
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [answer, setCorrectOption] = useState('');
    const [explanation, setExplanation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            subject,
            question,
            option1,
            option2,
            option3,
            option4,
            answer,
            explanation
        };
        const Register = await axios.post("http://192.168.0.131:8080/api/admin/mcq", formData);
        console.log(Register.data)
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Choose Subject:</label>
                <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="">Select Subject</option>
                    <option value="math">Math</option>
                    <option value="science">Science</option>
                    <option value="history">History</option>
                    <option value="language">Language</option>
                </select>
            </div>

            <div>
                <label>Question:</label>
                <textarea
                    type="text"
                    placeholder="Enter the question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
            </div>

            <div>
                <label>Option 1:</label>
                <input
                    type="text"
                    value={option1}
                    onChange={(e) => setOption1(e.target.value)}
                />
            </div>

            <div>
                <label>Option 2:</label>
                <input
                    type="text"
                    value={option2}
                    onChange={(e) => setOption2(e.target.value)}
                />
            </div>

            <div>
                <label>Option 3:</label>
                <input
                    type="text"
                    value={option3}
                    onChange={(e) => setOption3(e.target.value)}
                />
            </div>

            <div>
                <label>Option 4:</label>
                <input
                    type="text"
                    value={option4}
                    onChange={(e) => setOption4(e.target.value)}
                />
            </div>

            <div>
                <label>Correct Option:</label>
                <select value={answer} onChange={(e) => setCorrectOption(e.target.value)}>
                    <option value="">Select Correct Option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                </select>
            </div>

            <div>
                <label>Explanation:</label>
                <textarea
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                ></textarea>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default QuizForm;
