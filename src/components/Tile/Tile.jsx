import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';

import styles from './Tile.module.css';

const Tile = () => {
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <h4>Children <span role="img" aria-label="kid">👶</span></h4>
                        </Typography>
                        <Typography variant="body2" component="p">
                            the disease seems to be much milder in babies and children. However, it’s important to understand recent reports about pediatric inflammatory multisystem syndrome, or PIMS, a very rare condition that might be related to exposure to the coronavirus.
                            </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <h4>Elderly <span role="img" aria-label="old">👴</span></h4>
                        </Typography>
                        <Typography variant="body2" component="p">
                            Research is showing that adults 60 and older, especially those with preexisting medical conditions, especially heart disease, lung disease, diabetes or cancer are more likely to have severe — even deadly — coronavirus infection than other age groups.
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            <h4>Immunosuppressed Individuals <span role="img" aria-label="weak">🤧</span></h4>
                        </Typography>
                        <Typography variant="body2" component="p">
                            People with weakened immune systems are at higher risk of getting severely sick from SARS-CoV-2, the virus that causes COVID-19. They may also remain infectious for a longer period of time than others with COVID-19.
                            </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};
export default Tile;