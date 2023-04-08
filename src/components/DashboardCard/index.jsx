import "./DashboardCard.css";
import React from "react";
import ButtonOperation from "../Buttons/ButtonOperation";
import ButtonStatus from "../Buttons/ButtonStatus";

const DashboardCard = ({ type, color, fontColor, setTypes, setReload, }) => {
    const cardStyle = {
        backgroundColor: color || '#06132c',
        color: fontColor || '#FFF',
    }
    return (
        <div className="card" key={type.id} style={cardStyle}>
            <div className="card__title">
                <div className="card__title--title">
                    <a className="link">{type.title}</a>
                </div>
                <div className="card__title--values">
                    {type.n_loops}x
                    {type.chance}%
                </div>
            </div>

            <div className="card__value">
                {type.list ? type.list.length : 0}
            </div>

            <div className="card__controllers">
                <div className="card__controllers--row__buttons">
                    <ButtonStatus
                        id={type.id}
                        status={type.run}
                        statusType={'run'}
                        setTypes={setTypes}
                        setReload={setReload} />
                    <ButtonStatus
                        id={type.id}
                        status={type.rand_pos}
                        statusType={'rand_pos'}
                        setTypes={setTypes}
                        setReload={setReload} />
                </div>

                <div className="card__controllers--row__buttons">
                    <ButtonStatus
                        id={type.id}
                        status={type.start}
                        statusType={'start'}
                        setTypes={setTypes}
                        setReload={setReload} />
                    <ButtonStatus
                        id={type.id}
                        status={type.end}
                        statusType={'end'}
                        setTypes={setTypes}
                        setReload={setReload} />
                </div>
            </div>

            <div className="card__buttons">
                <ButtonOperation
                    type={type}
                    modalType={'edit'} />
                <ButtonOperation
                    type={type}
                    modalType={'clear'} />
            </div>
        </div>
    );
};

export default DashboardCard
