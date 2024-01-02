// /src/components/HomePage/index.jsx
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PageContent from '../PageContent';

function Page() {
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