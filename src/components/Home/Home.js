import React from 'react';
import ClientsFeedback from './ClientsFeedback';
import ContactForm from './ContactForm';
import Header from './Header';
import Services from './Services';
import WorksPreview from './WorksPreview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <WorksPreview></WorksPreview>
            <ClientsFeedback></ClientsFeedback>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;