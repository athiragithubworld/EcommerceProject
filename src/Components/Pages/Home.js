import React from "react";
import { Button } from "react-bootstrap";
import classes from './Home.module.css'


const Home = () =>{

    return(
        
        <div className={classes.container}>
        <h1 className={classes.h1}>Tours </h1>
        <div >
            <div className={classes.tourItems}>
                <span className={classes.tourDate}>JUL16</span>
                <span className={classes.tourPlace}>DETROIT, MI</span>
                <span className={classes.famPlace}>DTE ENERGY MUSIC THEATRE</span>
                <Button variant="info" style={{color:"white"}} className={classes.buyTicketButton} >BUY TICKETS</Button>
            </div>
            <div className={classes.tourItems}>
                <span className={classes.tourDate}>JUL19</span>
                <span className={classes.tourPlace}>TORONTO,ON</span>
                <span className={classes.famPlace}>BUDWEISER STAGE</span>
                <Button variant="info" style={{color:"white"}} className={classes.buyTicketButton}>BUY TICKETS</Button>
            </div>
            <div className={classes.tourItems}>
                <span className={classes.tourDate}>JUL 22</span>
                <span className={classes.tourPlace}>BRISTOW, VA</span>
                <span className={classes.famPlace}>JIGGY LUBE LIVE</span>
                <Button variant="info" style={{color:"white"}} className={classes.buyTicketButton}>BUY TICKETS</Button>
            </div>
            <div className={classes.tourItems}>
                <span className={classes.tourDate}>JUL 29</span>
                <span className={classes.tourPlace}>PHOENIX, AZ</span>
                <span className={classes.famPlace}>AK-CHIN PAVILION</span>
                <Button variant="info" style={{color:"white"}} className={classes.buyTicketButton}>BUY TICKETS</Button>
            </div>
            <div className={classes.tourItems}>
                <span className={classes.tourDate}>AUG 2</span>
                <span className={classes.tourPlace}>LAS VEGAS</span>
                <span className={classes.famPlace}>NVT-MOBILE ARENA</span>
                <Button variant="info" style={{color:"white"}} className={classes.buyTicketButton}>BUY TICKETS</Button>
            </div>
            <div className={classes.tourItems}>
                <span className={classes.tourDate}>AUG 7</span>
                <span className={classes.tourPlace}>CONCORD, CA</span>
                <span className={classes.famPlace}>CONCORD PAVILION</span>
                <Button variant="info" style={{color:"white"}} className={classes.buyTicketButton}>BUY TICKETS</Button>
            </div>
        </div>
        </div>
    )
}

export default Home;
