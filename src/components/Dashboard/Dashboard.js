import 'Dashboard.css';
import React, { useEffect } from 'react'
import { getGames } from '../../apiCalls.js';
import { useSelector, useDispatch } from 'react-redux';
import { addGames, addWish } from '../../actions';
import {Route, Link, Switch, Redirect } from 'react-router-dom';