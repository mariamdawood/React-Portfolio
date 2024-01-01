// /src/components/Contact/index.jsx
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Contact</h2>
            {/* Contact form with fields for name, email, and message */}
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows="4" required></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;