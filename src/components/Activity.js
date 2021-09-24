import React from 'react'
// Icons
import { faDice, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const Activity = ({ dice, top, bot, activity, back, newActivity, forward }) => {
    const priceCheck = (price) => {
        return price === 0 ? 'free'
        : price < 3 ? '$'
        : price < 5 ? '$$'
        : price < 8 ? '$$$'
        : '$$$$'
    }
    return (
          <div id="activity">
            <div style={{borderBottom: `1px solid ${bot}`}} className="activity-text"><span >{activity.activity}.</span></div>
            <div className="buttons">
                <Button icon={faArrowLeft} color={top} classN="back" click={back}/>
                <Button icon={faDice} color={dice} classN="submit" click={newActivity} />
                <Button icon={faArrowRight} color={bot} classN="forward" click={forward} />
            </div>
            <div style={{borderTop: `1px solid ${top}`}} className="activity-attributes">
                <span><strong>Cost:</strong>  {priceCheck(activity.price*10)}</span>
                <span><strong>People:</strong> {activity.participants}+</span>
            </div>
        </div>
    )
}

export default Activity
