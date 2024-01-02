// /src/components/HomePage/index.jsx
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { Outlet, useNavigate } from 'react-router-dom';
import PageContent from '../PageContent';

function Page({ currentPage }) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/about');
    }, [navigate]);

    return (
        <section>
            <PageContent>
                <Outlet />
            </PageContent>
        </section>
    );
}

export default Page;