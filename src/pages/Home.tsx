import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthorModal from '../components/AuthorModal';
import Column from '../components/Column';
import { initialColumns } from '../seed/initialData';
import useAppSelector from '../hooks/useAppSelector';
import { addColumn } from '../store/reducers/columnReducer';

function Home() {
    const dispatch = useDispatch();
    const { columns } = useAppSelector(state => state.column);
    const { currentAuthor } = useAppSelector((state) => state.author);

    useEffect(() => {
        if (columns.length === 0) {
            initialColumns.map((column) => dispatch(addColumn(column)));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const show = currentAuthor === null;
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                columnSpacing={1}
                rowSpacing={1}
                padding={1}
            >
                {columns.map(column => <Column key={`column_${column.id}`} column={column} />)}
            </Grid>
            <AuthorModal open={show} />
        </>
    );
}

export default Home;