import React from 'react';
import { Form } from 'react-router-dom';

export const contactData =async({request})=>{
try{
const res=await request.formData();
const data=Object.fromEntries(res);
console.log(data);
return null;

}catch(error){
console.log(error)
}
}


export const Contact = () => {
    const styles = {
        container: {
            // maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        label: {
            marginBottom: '8px',
            fontWeight: 'bold',
        },
        input: {
            marginBottom: '15px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            transition: 'border-color 0.3s',
        },
        textarea: {
            marginBottom: '15px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            transition: 'border-color 0.3s',
        },
        button: {
            padding: '10px 15px',
            width: '200px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007BFF',
            color: 'white',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        },
    };

    return (
        <div style={styles.container}>
            <h2>Contact Us</h2>
            <p>Get in touch with us.</p>
            <Form 
            style={styles.form}
            method='POST'
            action='/contact'
             >
                <label style={styles.label}>Full Name</label>
                <input 
                    type="text"
                    name="name"
                    required
                    style={styles.input}
                />
                
                <label style={styles.label}>Email Address</label>
                <input 
                    type="email"
                    name="email"
                    required
                    style={styles.input}
                />

                <label style={styles.label}>Message</label>
                <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    style={styles.textarea}
                ></textarea>

                <button 
                    type="submit" 
                    style={styles.button}
                    onMouseEnter={e => e.target.style.backgroundColor = '#0056b3'}
                    onMouseLeave={e => e.target.style.backgroundColor = '#007BFF'}
                >
                    Send Message
                </button>
            </Form>
        </div>
    );
};
