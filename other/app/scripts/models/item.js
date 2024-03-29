/**
 * JBoss, Home of Professional Open Source
 * Copyright Red Hat, Inc., and individual contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

jbw.Application.Models.Item = Backbone.Model.extend({
    initialize: function( attributes ) {
        this.itemId = attributes.itemId;
    },
    url: function() {
        return jbw.baseURL + "/auctions/" + this.itemId;
    },
    timeRemaining: function() { //TODO: NEEDS TO BE MORE BETTER
        var milliDuration,
            endDate,
            endTimeSeconds,
            endTimeMinutes,
            message = {};

        if( Date.parseISO( this.get( "started_at" ) ).getTime() > 0 ) {
            if( Date.parseISO( this.get( "ended_at" ) ).getTime() <= 0 ) {
                //Auction is still active
                milliDuration = this.get( "duration" ) * 60 * 1000;

                //calculate the end date
                endDate = Date.parseISO( this.get( "started_at" ) ).getTime() + milliDuration;

                //calculate out the seconds and minutes
                endTimeSeconds = Math.round( ( ( endDate - Date.now() ) / 1000  ) );
                endTimeMinutes = endTimeSeconds / 60;

                if( endTimeMinutes > 1 ) {
                    endTimeMinutes = Math.ceil( endTimeMinutes );
                } else {
                    endTimeMinutes = 0;
                }

                //only want to display one or the other
                if( endTimeSeconds > 0 ) {
                    if( endTimeMinutes > 0 ) {
                        message.time = endTimeMinutes;
                        message.type = "minutes";
                        message.message = " minute(s) remaining"; //maybe not
                    } else {
                        message.time = endTimeSeconds;
                        message.type = "seconds";
                        message.message = " seconds remining"; //maybe not
                    }
                } else {
                    //This should probably never happen since we are checking first;
                    message.over = true;
                    message.message = "Auction has ended";
                }
            } else {
                message.over = true;
                message.message = "Auction has ended";
            }
        } else {
            message.notstarted = true;
            message.message = "Auction hasn't started";
        }

        return message;
    },
    currentBid: function() {
        if( this.get( "high_bid" ) ) {
            return this.get( "high_bid" ).amount;
        } else {
            return this.get( "starting_price" );
        }
    },
    highestBidder: function( currentUser ) {
        if( this.get( "high_bid" ) ) {
            if( this.get( "high_bid" ).user.identifier == currentUser ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
});
