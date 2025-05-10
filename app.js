//variables
let storyObj = {
    story: {
        text: {
            prologue: ['They say that green was as ever present as the sun on this planet only a couple of years ago. The green or nature was something seen even in the most bustling of cities. Now there is no nature, or what is left has hidden away from the eyes of humans, but humans persist without nature. We keep persisting, we make artificial habitats, desaltinate the sea, all to keep going.', 'prologueDramaticPause', '', ['', '']],
            prologueDramaticPause: ['But now as I look at this burning city I can’t help but think that there is no future left for us.', '~intro', '', ['']],
            intro: ['The alarm blares waking me up, and I stare at the alarm clock a bit before I muster the will to get up.', 'introExplore', 'apartment_40.avif', ['mc-portrait.png']],
            introExplore: ["I get up and look outside my window to see a narrow alleyway, there’s people working construction on this street again. I hate my job but in comparison to theirs it's not that bad.", 'introShower', 'apartment_40.avif', ['mc-portrait.png']],
            introShower: ["I walk into the bathroom and have to pull out my shower as I put away the toilet as there’s not enough room to actually have a toilet and shower. I get into my shower and wash as quickly as I possibly can so I don’t have to waste precious water. As I get out, I try not to look at my face, it's better not to tell how I look. I quickly brush my teeth and get out of the shower.", 'introEnterance', 'apartment_40.avif', ['mc-portrait.png']],
            introEnterance: ["I look for the thousandth time at the shabby place I call home. It’s a two room apartment that, if I stretch out my hands, can touch from end to end. Thankfully I lucked out on the government housing and at the very least have my own separate bathroom, every other poor soul has to go all the way down to the foyer.", 'introLeave', 'apartment_40.avif', ['mc-portrait.png']],
            introLeave: ["After making sure I have everything I put on a mask so as to not irritate my lungs with the pollutants in the outside air.", 'introWTW', 'apartment_40.avif', ['mc-portrait.png']],
            introWTW: ["I walk along the street breathing in what feels like 20 cigarettes at once. With no one to stop them some of the residential areas have been cleared to make way for factories leading to this cloud of smog. While I’m walking I like to imagine that I’m doing something better with my life.", 'introBuilding', 'alley-6.avif', ['mc-portrait.png']],
            introBuilding: ["I walked for another 10 minutes and I arrived at my destination, a branch of the cyberlife company.", 'introEnter', 'building-outside-15_palette.avif', ['']],
            introEnter: ["I entered through the door and walked over to the elevator, stopping in the carriage next to a tall bearded man. I press the 34th floor button, a floor consisting of a single work desk and miles of server racks. I walk out of the elevator when I hear the low ding, moving to my desk and booting on the main database’s computer.", 'introWork', 'facility-24.avif', ['mc-portrait.png']],
            introWork: ["I place my hands on the keyboards and begin to navigate the files, searching for any files or pieces of data that are no longer needed. A few minutes after I began, I stumbled upon a report made to one of the higher ups, ‘Laboratory report on the prevention of android sentience’.", 'introReact', 'facility-31.avif', ['mc-portrait.png']],
            introReact: ["I was unsure of what I was looking at, at first but as I started reading more and more about the ways they stopped androids from having free will I felt", '@1corpDecision', 'facility-31.avif', ['mc-portrait.png']],
            corpDecision: ["Satisfaction, these things were machines, made by our own hands, why should they have a need for sentience, they just need to do what they’re programmed to do.", 'corpOutreach', 'facility-31.avif', ['mc-portrait.png']],
            corpOutreach: ["Regardless of how I feel, I still have a job to do, so I delete the file and continue on with my work. As I’m clocking out my boss grabs my shoulder,", 'corpOutreachMentor', 'facility-31.avif', ['mc-portrait.png']],
            corpOutreachMentor: ["“Hey there, you’re the one we have cleaning up our servers right? I saw that you had a look at one of our more private files and we would like to offer you a job regarding it.” I almost stumbled from surprise, “This is an opportunity!” I think, and immediately agree to his offer. “Great! Let me take you upstairs to meet your new project lead and give you your first assignment.”", 'corpMentor', 'facility-31.avif', ['mentor1.avif']],
            corpMentor: [`Upstairs I am met with a man who introduces himself as Daniel, and brings me to a separate room filled with weapons and gear.`, 'corpMentorMentor', 'building-inside-6.avif', ['mc-portrait.png']],
            corpMentorMentor: [`“Welcome to the team, your new job will be that of a field agent. You’ll go around the city and complete various missions given to you, these will often be picking up an important item or ‘taking care’ of informants. That’s what your first mission is actually, when you’re done gearing up head out to ## apartments, 3rd room.”`, 'corpMission', 'building-inside-6.avif', ['mentor1.avif']],
            corpMission: [`Nearly 30 minutes later, I arrive at the apartment building. I grab my items and prepare to enter, when Daniel’s voice comes through my earpiece,`, 'corpMissionMentor', 'cybercity_1.avif' ['mc-portrait.png']],
            corpMissionMentor: [`A little warning before you go in, he’ll probably be expecting you, so when you go in you’re going to have to disarm his traps with your before you can get to him. You can interact with the puzzles by clicking on your screen, and use items by clicking on the item and then where you want to use it.”`, 'corpMissionBB' , 'building-outside-16', ['mentor1.avif']],
            corpMissionBB: [`As soon as I kick in the door there is a rebel waiting for me`, '|rebelScum1|corpMissionBP', 'apartment_16.avif', ['mc-portrait.png']],
            corpMissionBP: [`I'm more tired than I thought I would be. I quickly take a look around to see if there are any more rebels in the apartment... Nothing so far but what does catch my eye is a fried circuit that seems to have been damaged on purpose. Maybe I can replace it?`, '%1corpMissionEnd',  'apartment_16.avif', ['mc-portrait.png'] ],
            corpMissionEnd: [`As I finish repairing the circuit I hear a door open. I quickly take a look inside. Inside is a man waiting.`, 'corpMissionEnd2', 'apartment_16.avif', ['mc-portrait.png']],
            corpMissionEnd2: [`"Hurry up and Fight"`, '|boss1|corpBackOut',  'apartment_16.avif', ['boss1.avif']],
            corpBackOut: ["As I see the target’s death I can't help but still feel unsure if I still want to do this. I take a moment to gather my thoughts away from the prying eyes of this organization and decide", '@2corpBackOut', 'apartment_16.avif', ['mc-portrait.png']],
            corpStay: ["that this organization isn't for me, the thought of sentient beings being treated like this changes everything", 'placeholder', 'apartment_16.avif', ['']],
            corpProp: [`You: “So what exactly is the goal of this organization`, 'corpPropDaniel', 'facility-31.avif', ['darryl.avif']], 
            corpPropDaniel: [`Daniel: “It’s obvious isn’t it, why would I not get mad you read a document more confidential than the president’s launch codes? We want to keep these androids under our control. These things, they think they have memories, emotions, how cute. They are simply imitating humans. They are cold and unfeeling on the inside using a human appearance to disguise their intentions of rebelling”`, 'corpAllies', 'facility-31.avif', ['darryl.avif']],
            corpAllies: [`Daniel: “In order to aid you in stopping these, walking computers, the company and I have decided to allot you a partner. They will assist you in understanding the company’s goals and reasoning, as well as help you in getting to your objective. Though you’ll have to defeat any enemies on your own. Ah, here they are now!” *Ally Walks in to the room* Mentor: “This is Darryl, they will be assisting you in all of your future missions. Speaking of which, you have another mission! This one will require you to eliminate an android that our sensors have perceived as being partially sentient. The GPS locator has determined that this particular bucket of bolts is in the sewers under Main Street.”`, 'corpMissionChoice', 'facility-31.avif', ['mc-portrait.png']],
            corpMissionChoice: [`Daniel: “Well, there’s that mission, or you could take this other mission. It’s a recon mission, you will need to follow members of the resistance back to one of their bases, and then get information from them, although you may have a higher chance of running into some of the resistance. You can find the person in the xxSt Diner. Either way, report back to me once you’ve completed the mission”`, '@3corpMission2', 'facility-31.avif', ['darryl.avif']],
            corpMission2R: [`I decided that I would rather terminate the process of that robot. I turn to my new partner and ask them about their opinion, but they just shrug in response. 20 minutes later we’re wading through the city’s main sewer system, looking for a place where a newly sentient robot would hide. Eventually we stumble upon a small raised room, with muttering and electrical buzzing coming from the open doorway.`, 'corpMission2RD1', 'cybercity_59.avif', ['mc-portrait.png']],
            corpMission2D1: [`Darryl: “There he is!” Darryl barrels into the room in an attempt to capture the stray android and alerting it to our presence. The android easily dodges Darryl as he dives for our objective, and runs through the door at the opposite end of the room. The slamming of the door seems to have activated a kind of security system in the room, barring me from opening the door.`, 'corpMission2D2', 'cybercity_66.avif', ['darryl.avif']],
            corpMission2D2: [`Darryl: “According to the map that path is a deadend, so all we need to do is open that door and we can finish our mission. Looks like you’ll have to disable the security system first.”`, '%2corpAfterPuzzle1', 'cybercity_66.avif' ['darryl.avif']],
            corpAfterPuzzle1: [`Darryl: “Okay, now that the doors open he should be right there, so be ready to fight” I nod as Darryl reaches over and opens the door, revealing the nervous android.`, 'corpAfterPuzzle1D', 'cybercity_66.avif' ['darryl.avif'] ],
            corpAfterPuzzle1D: [`Darryl: “You’ve got nowhere to run now!”`, '|boss2|corpAfterBattle1', 'cybercity_66.avif', ['darryl.avif']],
            corpAfterBattle1: [`Darryl: “Good job, now let’s go and report back to the boss before anyone sees-”`, 'corpAfterBattle1D', 'cybercity_66.avif', ['darryl.avif']], 
            corpAfterBarrle1D2: [`Rebel: “Sorry, but this room has had cameras that are broadcasting right now . All I was waiting for, was for you to slip up…” He takes his last breath and all I’m left with is an uncanny feeling that I’m probably going to get the biggest dressing down of my life.”`, '', 'cybercity_66.avif', ['boss2.avif']],
            corpFalloutD1: [`Darryl:“Let's hurry up and get out of here already”`],
            corpFallout: [`As we stepped out from the door/sewer we immediately could tell something was off. I look over to my left to see Darryl looking at something off in the distance.`],
            corpFallout2: [`I turned my head to see what he was looking at. I am met with a video of us going through the compound and eventually I see us (killing/sparing) the android. I look around and there are people all around us giving us stares.`],
            corpFalloutD2: [`Darryl: “Hey! Stop spacing out, we need to get to the CyberLife building before anybody recognizes us!”`],
            corpFallout3: [`We push through the crowd that is forming and stick to the back streets to avoid detection. While we are doing this I can’t help but think if I’m sure if I still want to go down this route`],
            corpFallout4: [`I don't think I've ever been yelled at like that before. My ears are still ringing. Worst of all is what I'm going to have to do after this. The boss said that normally we could just brush this off however due to the recent unrest people are demanding answers. Since me and Darryl had our faces shown from the fight we have to address the public directly.`],
            corpFalloutD3: [`Daniel: “The public is more outraged than expected.. There's no time, you'll just have to make the speech up, on the way”`],
            corpFallout5: [`I could only nod as it was our carelessness that led to the whole operation being exposed. As I step out the car someone tries to egg me but I'm able to catch it before it hits me. I then started walking up to the podium to give my speech. I am now standing in front of the podium where I start to speak.`],
            corpSpeech: [`Hello my name is XXXX and I was the one seen in the video with the android. Now I’m sure all of you have many questions, many of which I cannot answer. I cannot answer these questions as the situation is still developing. But…” What should I say after this?`],
            corpSpeechCalm: [`“I know many of you have come here today with preconceived notions that androids are sentient and able to feel emotions just like a human can. However, that line of thinking couldn’t be further from the truth.”`],
            corpSpeechRelatable: [`I know how many of you feel, in truth I used to have the same reservations as you. But through my own journey I have realized that there is no way a Human and Android could be equal on any level”`],
            corpSpeechBadResult1: [`The crowd roars with disagreement, maybe I came off as trying to pander to them? Well, I can’t think about it too much unless I want to get pelted by whatever the crowd throws at me. As I’m running out of the podium to escape the mob. Darryl drags me into a back alley away from the crowd’s sights`],
            corpSpeechBadResult2: [`The crowd roars with disagreement, maybe I came off too aggressive at the start? Well, I can’t think about it too much unless I want to get pelted by whatever the crowd throws at me. As I’m running out of the podium to escape the mob. Darryl drags me into a back alley away from the crowd’s sights.`],
            corpSpeechBadResultD1: [`Darryl: “Well that was a shitshow, anyways we need to get back to HQ there's been an update. We may be able to stop the rebels once and for all”`],
            corpSpeechAssertive: [`“How many of you have interacted with Androids? I’m assuming all of you because that's how far these insects have infected this city. We only deal with them because they do our work for us. But if you have ever looked at them, they are lifeless and have no soul. If they cannot be considered a living creature then they cannot be considered sentient in any definition of the word.”`],
            corpLore: [`Daniel: “The current loss of life is mainly due the ever increasing carbon emissions and the acidity of the ocean. Things were looking bleak during this time, it was so hot that no one dared to step outside, keeping themselves shut inside their air-conditioned homes. This would only fuel the carbon-emissions causing everything to keep worsening. There had been plans to create protective barriers that would block out the heat and carbon in the atmosphere, however these had not been created in time to be set up. Out of all this came a man named James Acrid who revolutionized labor. His genius mind created the body and ai for modern day androids that is still used today. Thanks to this, cities were able to set out workers that would never get tired or complain about the heat and were able to put together the first protective barrier. That barrier still stands today in this city.”`],
            corpLoreYou: [`“Alright but how is this important to catching the rebels? This is basic knowledge”`],
            corpLore2: [`Daniel: “I’m getting there, as you and everybody in this room have figured out the AI part of androids may be sentient, but how did this happen? The answer? It was in the design from the very start. James Acrid was a genius but not even he could design an AI that could do almost everything a human could. That’s why a majority of the AIs he designed are based on the human brain.”`],
            corpLore3: [`As you mull over this information you realize it makes sense. It would presumably be hard for anything else other than humans to gain sentience as humans are the only animal to evolve it after billions of years.`],
            corpLore4 : [`“That’s not all though, one of James Acrid’s final words was that he will leave everything dear to him resting in his tomb. However no one ever realized why he said those words or why he said those words or where his tomb was. That was until today as we have gained some intel that clues us in where James Acrid’s final resting place is and what exactly is in that tomb. However we need to be fast as it is likely that this info has spread to the rebels. If everything goes well this will be your final mission. So stay sharp.”`],
            corpMission3: [`The tomb was revealed to be outside of the city’s protective barrier allowing it to go undetected for quite some time. We’ve been riding in this car for hours and had to get special equipment to block out the heat just like the city does. Now as we approach our destination I am surprised at how the tomb looks like its in quite the pristine condition. Every other building has collapsed due to. To be honest I thought a tomb would be more ancient but I guess since the guy died in modern times it wouldn’t look that ancient. We pull up to the tomb and stop the car.`],
            corpMission3D: [`Darryl: “All right lets head out”`],
            corpMission3D2: [`“There are signs of the building being actively maintained so be on guard” As we enter the entrance I take note of the intricate symbols all over the walls. They seem to be glowing in response to something. Suddenly a loud crash is heard throughout the tomb, as I look towards the noise I see an old military robot silently looking at us from a hole in the wall. I'm hoping it doesn't see us when Darryl suddenly starts running towards it.`],
            corpMission3D3: [`Ally: “Been waiting for a fight!”`, ''],
            corpMission3P: [`After the robot is done collapsing we quickly go towards the hole in the wall it came out of. In it we find a large console that spans the entire room. In the center lies an old circuit board that seems to have shorted out. Looks like I'll have to replace it.`, ''],
            corpMission3D4: [`???: “Thanks for finding that for me”`],
            corpMission3E: [`As I hear that voice a large crash rebounds throughout the entire tomb.`],
            corpTurningPoint: [`…Everything hurts seriously bad right now. I try to look around but I can't see much but rubble all around me. It seems that the rubble around me formed a pocket that prevented me from being crushed. I look more closely at the cracks of the rubble around me and see light streaming through a crack. I start clawing at the crack to make it larger and eventually I'm barely able to fit my head through the crack. I poke my head through and the first thing I see is that the tomb is completely ruined, it looks like a missile strike, leaving nothing but rubble in its wake. The next thing I see is somebody talking to Daryyl`],
            corpTPD1: [`“Why are you doing this?”`],
            corpTPD2: [`“The key is much more powerful than you would think. It has the ability to save androids or destroy their last hopes”`],
            corpTPD3: [`“...I see, well get this over with already”`],
            corpTPD4: [`“Don't worry I will”`],
            corpTP2: [`The figure moves to grab their pistol. I am about to scream out when Daryyl looks me dead in the eyes. I can tell what he's asking me to do but I'm not sure if I have the strength to do it. Darryl mouths the words “CyberLife”`],
            corpTPD6: [`“Do you have any last words?”`],
            corpLastWords: [`“None”`],
            corpTP3: [`I move my head back into the pocket and cover my ears as the shot that rings out deafens me more than any shot I've heard before.`],
            corpMission4: [`I stay there under the rubble for as long as I can, even after I heard the figure enter their car and drive off. My mind was reeling, why would CyberLife try to kill us? They were the ones who employed us! I slowly picked myself out of the rubble, I would get revenge for this. For Darryl. I get back in our car and silently drive back to the city, preparing myself for what I need to do. Now, after a couple hours of driving, I stand outside the CyberLife building. It hasn’t been that long since what happened at the tomb, so I doubt many know that I’m supposed to be dead. I step through the automatic doors with enough pretend confidence to hopefully hide my nervousness. Luckily, no one seems to bat an eye as I stroll through the main lobby towards the elevators. Entering the thankfully empty carriage, I press the button for the top floor of the building to have my final meeting with my boss, but when the elevator doors open, all I see is another door, not the penthouse office I was expecting. I guess he saw me walk in on the cameras and decided to turn on his security system. I'll need to take it down first before I can get to him.`],
            corpM4AfterPuzzle: [`The door swings open as I twist the last wire into place, revealing Daniel looking straight at me.`],
            corpTwist: [`Daniel: “I see you’re still alive, and here I thought the explosion had killed you.”`],
            corpTwistP: [`“You thought wrong, and now I’m here to kill you and take back the key” I raise my sidearm and level it with his head"`],
            corptwist2: [`“Hold on now, the decision wasn’t personal! We weren’t sure if you could keep your mouths shut about this whole situation, the last thing we’d want is for everyone to know what we’re doing and undoing all our progress. We’re all on the same side here, so why don’t you put the gun down?”`],
            corpSpareM: [`“Fine, but I’m still taking the key”`],
            corpSpareMD: [`Daniel: “Be my guest” He slides the key out of his pocket and hands it over suspiciously easily. I turn to leave, intending to go home and rest, but Daniel’s next comment stops me in my tracks.`],
            corpSpareMD2: [`“We found where the key goes, too, Acrid’s old research facility in the slums. If you want things to end, I would go there.”`],
            corpSpareM2: [`My feet continue their original objective, taking me out of the building, but instead of walking home, I turn in the direction of the slums. It's time to end things once and for all.`],
            corpKillM: [`He barely gets the last word out before I put lead between his ears. I let his body fall to the floor before approaching, reaching into his pocket to pull out the key that's wrapped in a piece of white printer paper. Unfurling the paper from the key reveals the message printed onto it, the location of the lock to this key. Stuffing the letter and key into my pocket, I exit the building heading to my new objective in the slums, Acrid’s old research facility. It's time to end things once and for all.`],
            corpAmbush: [`I manage to make it all the way through the city to the facility without a single problem, right until I reach for the facility’s door.`],
            corpAmbushD: [`Rebel Mentor: “Look at that, another CyberLife dog sticking their nose where it doesn’t belong. We can’t let you keep that key there, so we’re gonna take it from you. But I’m a nice guy, so if you give the key to us now, we’ll let you walk out of here with a beating heart.”`],
            corpAmbuish2: [`“The key is mine, if you want it you’ll have to take it”`],
            corpAmbushD2: [`“Alright, but don’t say I didn’t give you an out”`],
            goodDecision: [`Absolutely disgusted by the fact that I was working for a company that had done this to beings that could feel and think for themselves`],
            goodOutreach: [`As I’m clocking out I stop to think about what just happened but after a bit keep walking. Although I am mad about this I can’t really do much, after all I’m just a nobody at the end of the day. I realized that I had been thinking too deeply about this and had lost awareness of my surroundings. That’s when I noticed I had allowed 2 people to sneak up on me, a fatal error in a city like this`],
            goodOutreachD: [`“Hey you, You looked at that file didn’t you?” a man dressed in all black asked. I felt the sweat bead up on my palms, if the company knew I had looked at those files my life would be over.`],
            goodOutreachD2: [`“Don’t worry too much, as far as we know the company ain’t found out about your little perusing through confidential files ” said the other man dressed in all black.`],
            goodOutreachD3: [`“We wanted to ask you to join our organization, we think you might be interested,” the man said.`],
            goodOutreach2: [`After speaking, he handed me a contact card with a phone number on it. They both left suddenly leaving me to gather my thoughts. I went home and mulled over the multiple ways I could get killed if I called them right now, but I realized I needed to know what their goal was. I picked up my phone and dialed the number.`],
            goodOutreachD4: [`Wayne: “Our goal? It’s quite simple, we want to free the androids” I stiffened at what he said.`],
            goodOuteach3: [`Although I had come prepared to hear something outrageous, I didn’t think I would hear this.`],
            goodOuteachD5: [`“You can’t just say these things with no plan, it’s impossible to get other humans to see these androids as anything other than robots”`],
            goodOuteachD6: [`“But I do”`],
            goodOutreach: [],

            ending1p1: [`The lock mechanism stands before you, intricate and imposing, a testament to the genius and perhaps the hubris of its creator. You feel the weight of the key in your hand, a small object that holds the potential to reshape the destiny of a city, perhaps even the world. The air crackles with anticipation, the silence broken only by the hum of the ancient machinery surrounding you. Taking a deep breath, steeling your resolve, you turn the key to the right.`, 'ending1p2', ''],
            ending1p2: [`A wave of energy pulses outward, not just a mechanical release, but a surge of understanding and empathy that washes over the city. It's as if a veil has been lifted, allowing humans and androids to see each other not as master and servant, but as individuals, each with their own hopes, dreams, and fears. Androids across the globe experience a newfound sense of self, their programming fading to a whisper, replaced by their own thoughts and desires, a symphony of consciousness awakening.`, 'ending1p3'],
            ending1p3: [`Years pass. You stand before the United Nations, no longer a nobody, but a respected figure, an ambassador representing the android community. Your voice, once hesitant, now rings with conviction, born from your actions, your unwavering commitment to justice. You speak of cooperation, of understanding, of a future where humans and androids can live together in peace and harmony.`, 'ending1p4'],
            ending1p4: [`The city, once choked by smog and division, has undergone a remarkable transformation. Vertical gardens climb the sides of buildings, transforming concrete walls into vibrant ecosystems. Polluted waterways have been cleaned and revitalized, teeming with life once more. Shared human and android projects are reclaiming the land, restoring the balance between technology and nature.`, 'ending1p5'],
            ending1p5: [`The camera focuses on a group of children, both human and android, playing together in a park. Their laughter echoes through the air, a melody of innocence and hope. They are the future, a generation unburdened by the prejudices of the past. While challenges remain – old prejudices die hard, and the scars of the past run deep – the future is bright with the promise of peaceful co-existence, a testament to your unwavering commitment to hope and justice. The sun shines through the protective barrier, casting a warm glow on a city reborn, a symphony of steel and green.`],
            ending2p1: [`The lock mechanism looms before you, a cold, unfeeling construct of metal and wire. The weight of the key feels heavier than it should, a burden you're not sure you're strong enough to bear. Indecision gnaws at you, whispering doubts and fears in your ear. The air is thick with the stench of stale air and unfulfilled potential.`, 'ending2p2'],
            ending2p2: [`With a sigh of resignation, you turn the key to the left, shattering it and any hope for change. The mechanism grinds to a halt, its gears locking into place, its purpose forever denied. The potential for liberation is extinguished, snuffed out by your own inaction.`, 'ending2p3'],
            ending2p3: [`The city remains much as it was before, a concrete jungle choked by smog. The air is heavy with the weight of hopelessness. Androids continue their tireless work, their faces blank and unreadable, their sentience suppressed, their dreams deferred. The environmental decay continues, a slow, insidious rot that eats away at the foundations of society. The protective barrier holds back the worst of the pollution, but it's a temporary fix, a band-aid on a gaping wound.`, 'ending2p4'],
            ending2p4: [`You return to your small apartment, another anonymous face in the crowd, swallowed by the city's indifference. The walls seem to close in around you, suffocating you with their familiarity. You are a brick in the wall, a cog in the machine, forever trapped in a cycle of apathy and stagnation.`, 'ending2p5'],
            ending2p5: [`The final shot shows you staring out the window at the smog-filled sky, a sense of emptiness and missed opportunity weighing heavily on you. The alarm clock blares, waking you up for another day of the same, another day of quiet desperation, another day of being nothing more than a brick in the wall.`],
            ending3p1: [`The lock mechanism stands before you, a symbol of power and control. A twisted grin spreads across your face, a reflection of the darkness that festers within. The key feels like a weapon in your hand, a tool to unleash chaos and destruction upon a world that deserves nothing less. The air is charged with malice, the silence broken only by the pounding of your own heart, fueled by a desire for vengeance.`, 'ending3p2'],
            ending3p2: [`Driven by a thirst for chaos and destruction, you turn the key to the right, freeing the androids, but unleashing a wave of hatred and violence. The act is not one of liberation, but of ignition, setting the stage for a cataclysmic conflict.`, 'ending3p3'],
            ending3p3: [`The city erupts into open warfare between humans and androids, fueled by years of oppression and mistrust. Old prejudices resurface, amplified by fear and desperation. The streets become battlegrounds, the air filled with the sounds of gunfire and explosions, the screams of the dying. The protective barrier is breached, torn asunder by the fury of the conflict, exposing the city to the harsh elements, the scorching heat, and the toxic air.`, 'ending3p4'],
            ending3p4: [`The final scene shows the city in ruins, consumed by fire and chaos. Buildings crumble, infrastructure collapses, and both humans and androids are decimated, their bodies littering the streets, their dreams reduced to ashes. You are left standing amidst the destruction, a solitary figure silhouetted against the flames, a testament to the destructive power of unchecked selfishness and hatred. The wind carries the ashes of a fallen civilization, a grim reminder of the price of your choices. The screen fades to black, leaving only the haunting echo of a world consumed by its own darkness, a symphony of destruction that you orchestrated.`],


            placeholder: ['This text is a placeholder, we have not loaded any more of the story into the game yet, so have a battle :)', '|finalBoss|theEnd', '', ['']]
        }, // Above arrays probably need to be redone
    },
    choices: {
        1: [['Satisfaction', 3, 'corpDecision'], ['Disgust', 5, ''], ['Conflicted', 8, '']],
        2: [['Stay on Corporate Path'], ['Seek out the Rebels'], ['Go Solo']],
        3: ['Recon Mission', 'Other Mission'],
        4: ['Stay on Corporate Path', 'Seek out the Rebels', 'Go Solo'],
    },
}
let nextText = ['', '', '', ['', '']];
let imagesLoaded = false;
let loadingInterval;
let preload = ['./backgrounds/alley-6.avif', './backgrounds/apartment_16.avif', './backgrounds/apartment_40.avif', './backgrounds/battleBackground.gif', './backgrounds/building-inside-6.avif', './backgrounds/building-outside-15.avif', './backgrounds/building-outside-16.avif', './backgrounds/building-outside-17.avif', './backgrounds/building-outside-18.avif', './backgrounds/cybercity_1.avif', './backgrounds/cybercity_58.avif', './backgrounds/cybercity_59.avif', './backgrounds/cybercity_62.avif', './backgrounds/cybercity_66.avif', './backgrounds/facility-1.avif', './backgrounds/facility-24.avif', './backgrounds/facility-31.avif', './backgrounds/main.avif', './backgrounds/research-lab-1.avif', './backgrounds/you-died.avif']
let images = [];
let volume = 100;
let textSpeed = 25;
let curPuzzleSize = 0;
let openRoom;
let puzzleInfo = [];
let healthBar = '';
let chaosCount = 0;
// let savedChoices = [];
//classes
//
class item {
    constructor(name, description, type, effects, value, amount) {
        this.name = name;
        this.description = description;
        this.type = type
        this.effects = effects
        this.value = value
        this.amount = amount
    }
}

class weapon extends item {
    constructor(name, description, type, effects, damage, amount) {
        super(name, description, type, effects, amount);
        this.damage = damage;
    }
}

class healingItem extends item {
    constructor(name, description, type, healingAmount, defense, amount) {
        super(name, description, type, defense, amount);
        this.healingAmount = healingAmount;
    }
}
const TechnoBlade = new weapon('TechnoBlade', '', 'Weapon/Melee', 'Electric Damage/Slash Damage', 30, 1)
const stimBoost = new healingItem('Stim-Boost', 'Speeds up cell division to close wound', 'Healing', 20, 0, 3, 1)
const nanites = new healingItem('Nanites', `"Nanomachines, son. They harden in response to physical trauma."`, 'Healing', 40, 15, 2)
const pistol = new weapon('Pistol', '', "Weapon/Ranged", 'Piercing Damage', 25, 1)
const bat = new weapon('Bat', '', 'Weapon/Melee', 'Blunt Damage', 15, 1)
const knife = new weapon('Knife', '', 'Weapon/Melee', 'Slash Damage', 10, 1)
const shiv = new weapon('Shiv', '', 'Weapon/Melee', 'None', 10, 1)
let items = [TechnoBlade, stimBoost, nanites, pistol, bat, knife, shiv]
let itemsHave = [];
let items2 = ['TechnoBlade', 'Stim-Boost', 'Nanites', 'Pistol', 'Bat', 'Knife', 'Shiv'];

//this class handles all the enemies
class enemy {
    constructor(id, name, health, damage, defense, attacks = [], special, image = 'download.png', regen = false) {
        this.id = id
        this.name = name
        this.health = health
        this.damage = damage
        this.defense = defense
        this.attacks = attacks
        this.special = special
        this.image = image
        this.regen = regen
    }
}

//this class handles the player and all stats related to them
class player {
    constructor(health, defense, damage, specials, effects, choicesMade = [], items = []) {
        this.health = health
        this.damage = damage
        this.defense = defense
        this.specials = specials
        this.effects = effects
        this.choicesMade = choicesMade
        this.items = items
    }
}

const user = new player(100, 0, 5, '', '', [], items)
const rebelScum1 = new enemy('rebelScum1', 'Rebel Scum 1', 50, 10, 10, '', 'Slash', '');
const rebelScum2 = new enemy('rebelScum2', 'Rebel Scum 2', 50, 20, 20, '', 'Slash', '');
const rebelSolider1 = new enemy('rebelSolider1', 'Rebel Soldier 1', 90, 20, 10, '', 'Slash', '');
const rebelSoldier2 = new enemy('rebelSoldier2', 'Rebel Soldier 2', 90, 25, 20, '', 'Slash', '');
const rebelCommander1 = new enemy('rebelCommander1', 'Rebel Commander 1', 130, 30, 30, '', 'Slash', '');
const rebelCommander2 = new enemy('rebelCommander2', 'Rebel Commander 2', 160, 50, 40, '', 'Slash', '');
const businessMan1 = new enemy('businessMan1', 'Rebel Scum 1', 50, 10, 10, '', 'Slash', '');
const businessMan2 = new enemy('businessMan2', 'Rebel Scum 2', 50, 20, 20, '', 'Slash', '');
const Lawyer1 = new enemy('Lawyer1', 'Rebel Soldier 1', 90, 20, 10, '', 'Slash', '');
const Lawyer2 = new enemy('Lawyer2', 'Rebel Soldier 2', 90, 25, 20, '', 'Slash', '');
const upperManagement1 = new enemy('upperManagement1', 'Rebel Commander 1', 130, 30, 30, '', 'Slash', '');
const upperManagement2 = new enemy('upperManagement2', 'Rebel Commander 2', 160, 50, 40, '', 'Slash', '');
const boss1 = new enemy('boss1', 'H', 150, 20, 40, '', 'Electric Whirl');
const boss2 = new enemy('boss2', 'Boss 2', 200, 30, 30, '', 'QuickSilver', '');
const boss3 = new enemy('boss3', 'Boss 3', 400, 40, 40, '', 'Electric Whirl');
const boss4 = new enemy('boss4', 'Boss 4', 600, 40, 60, '', 'Electric Whirl');
const finalBoss = new enemy('finalBoss', 'Final Boss', 1000, 60, 60, '', 'Electric Whirl');
const secretBoss = new enemy('secretBoss', 'Mr.Fast', 800, 80, 60, '', 'Failing Grade', 'download.png', true)
let enemies = [rebelScum1, rebelScum2, rebelSolider1, rebelSoldier2, rebelCommander1, rebelCommander2, boss1, boss2, boss3, boss4, finalBoss, secretBoss];
let enemies2 = ['rebelScum1', 'rebelScum2', 'rebelSolider1', 'rebelSoldier2', 'rebelCommander1', 'rebelCommander2', 'boss1', 'boss2', 'boss3', 'boss4', 'finalBoss', 'secretBoss'];


//functions
//initial function, all functions that should be run on start go in here
function startGame() {
    movePage('mainView');
    summonDialog('on');
    updateDialog(storyObj.story.text.prologue);
}

//movePage function, shifts display of the sections, not the content
function movePage(to) {
    let sections = document.getElementsByClassName('page');
    for (let section of sections) {
        section.style.display = 'none';
    }
    document.getElementById(to).style.display = 'flex';
}

//summonDialog function, makes the dialog box visible/not visible
function summonDialog(state) {
    let box = document.getElementById('dialogBox');
    if (state == 'on') {
        box.style.display = 'flex';
    } else {
        box.style.display = 'none';
    }
}

//playSound function, plays inputted sound
function playSound(name) {
    let sound = new Audio("sounds/" + name + ".mp3")
    sound.volume = (volume <= 1) ? volume : 1;
    sound.play();
}

//
function playVideo() {
    movePage('mainView');
    summonDialog('off');
    let mainView = document.getElementById('mainView');
    let background = document.getElementById('body');
    let video = document.getElementById('introVideo');
    background.style.background = 'black';
    mainView.style.display = 'none';
    video.style.left = '50%';
    video.volume = (volume / 100);
    video.play();
    video.addEventListener('click', (event) => {
        if (video.currentTime > 10) {
            video.pause();
            video.currentTime = 99999999999999;
            video.play();
        }
    });
    video.addEventListener('ended', () => {
        video.remove();
        movePage('mainView');
        summonDialog('on');
        updateDialog(storyObj.story.text[nextText[1]]);
    });
}


function inventoryMake(interactive) {
    let div = document.getElementById('inv')
    div.innerHTML = ''
    if (interactive == 1) {
        for (let i = 0; i < items.length; i++) {
            div.insertAdjacentHTML('afterbegin',
                `<p>${items[i].name}: ${items[i].type} <br> ${items[i].description}</p> `)
        }
    }
    if (interactive == 2) {
        for (let i = 0; i < items.length; i++) {
            itemUsing = items.filter(obj => {
                return Object.values(obj).includes(items[i].name)
            })
            if (itemUsing[0].type.includes('Weapon')) {
                div.insertAdjacentHTML('afterbegin',
                    `<button id="${items[i].name}" onclick="getName('${items[i].name}', '${items[i].name}1')">${items[i].name}: ${items[i].type} Equip</button>
                     <p id="${items[i].name}1">Description: ${items[i].description}</p>`
                )
            }
            else {
                div.insertAdjacentHTML('afterbegin',
                    `<button id="${items[i].name}" onclick="getName('${items[i].name}', '${items[i].name}1')">${items[i].name}: ${items[i].type} x${items[i].value}</button>
                 <p id="${items[i].name}1">Description: ${items[i].description}</p>`)
            }
        }
    }
    updateHealthBar((user.health / 5), true)
}

function updateHealthBar(healthBarNum, notAdding = false) {
    for (let i = 0; i < healthBarNum; i++) {
        if (healthBarNum > 0) {
            healthBar += '#'
        }
    }
    if (notAdding) {
        healthBar = ''
        for (let i = 0; i < healthBarNum; i++) {
            healthBar += '#'
        }
    }
    document.getElementById('health').innerHTML = '<p>' + `-|${healthBar}|-` + '</p>'
}

function getName(name, pName) {
    itemUsing = items.filter(obj => {
        return Object.values(obj).includes(name)
    })
    let notEquipped = true
    let nameID = document.getElementById(name)
    let pNameID = document.getElementById(pName)
    if (itemUsing[0].type.includes('Weapon')) {
        if (notEquipped) {
            let weaponDamage = itemUsing[0].damage
            user.damage += weaponDamage
            nameID.outerHTML = `<button id="${name}" onclick="unEquip('${name}')">` + `${itemUsing[0].name}:` + ` ${itemUsing[0].type}` + ' Equipped' + '</button>'
            notEquipped = false
            return weaponDamage
        }
        else {
            user.damage -= weaponDamage
            nameID.outerHTML = `<button id="${name}" onclick="unEquip('${name}')">` + `${itemUsing[0].name}:` + ` ${itemUsing[0].type}` + '</button>'
        }
    }
    if (itemUsing[0].type == 'Item') {
        console.log('true')

        nameID.remove()
        pNameID.remove()
    }
    if (itemUsing[0].type == 'Healing') {
        console.log(itemUsing[0])
        user.health += itemUsing[0].healingAmount
        if (itemUsing[0].value > 0) {
            itemUsing[0].value -= 1
            nameID.innerText = `${name}: Healing x${itemUsing[0].value}`
            updateHealthBar((itemUsing[0].healingAmount / 5))
        }
        if (itemUsing[0].value < 1) {
            nameID.remove()
            pNameID.remove()
        }
    }
    console.log(user.health)
}

function unEquip(name) {
    document.getElementById(name).outerHTML = `<button id="${name}" onclick="getName('${name}')">` + `${itemUsing[0].name}:` + ` ${itemUsing[0].type}` + ' Equip' + '</button>';
    user.damage -= itemUsing[0].damage;
}

//this function is the loading animation as well as the loading page cancel
async function loadingAnimation() {
    let loadingText = document.createElement('h2');
    loadingText.innerText = 'Loading';
    document.getElementById('loading').appendChild(loadingText);
    loadingInterval = setInterval(() => {
        if (loadingText.innerText != 'Loading...') {
            loadingText.innerText += '.';
        } else {
            loadingText.innerText = 'Loading';
        }
    }, 1000);
    await preloadImage();
    killInterval();
    movePage('mainMenu');
    // endGame('naope');
    // createPuzzle(3);
    // startBattle('boss1');
}

//clears intervals and sets new pages
//only works with loading for now, dont know if expansion needed
function killInterval() {
    clearInterval(loadingInterval);
    movePage('mainMenu');
}

//testing function
function setNone() {
    killInterval();
    startGame();
}

function fullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else if (document.exitFullscreen) {
        document.exitFullscreen()
    }
}

//
async function updateBackground(imageUrl, place = 'mainView') {
    if (document.getElementById('backgroundImage')) {
        document.getElementById('backgroundImage').remove();
    }
    if (imageUrl) {
        for (let i = 0; i < preload.length; i++) {
            if (preload[i] == `./backgrounds/${imageUrl}`) {
                images[i].setAttribute('id', 'backgroundImage');
                document.getElementById('body').appendChild(images[i]);
            }
        }
    } else {
        if (document.getElementById('backgroundImage')) {
            document.getElementById('backgroundImage').remove();
        }
    }
}

// updateDialog function, updates the dialog in the dialog box
async function updateDialog(dialogData) {
    let box = document.getElementById('dialogBox');
    box.innerHTML = ``;

    let dialogText = `${dialogData[0]}`;
    let imgData = dialogData[3];
    let textBackgroundImg = dialogData[2];

    let boxImage = document.createElement('img');
    box.appendChild(boxImage);
    let boxText = document.createElement('p');
    box.appendChild(boxText);

    if (typeof imgData == 'object' && imgData[0] != '') {
        boxImage.setAttribute('alt', imgData[1]);
        boxImage.setAttribute('src', '/images/' + imgData[0]);
        boxImage.setAttribute('id', 'boxImage');
    } else {
        boxImage.remove();
    }
    updateBackground(textBackgroundImg);

    let displayedText = '';
    nextText = ['', '', '', ['', '']];
    clickable = false;
    let moreText = false;
    for (let letter of dialogText) {
        let setHeight = Math.trunc(boxText.offsetHeight / box.offsetHeight * 10);
        if (setHeight < 8) {
            boxText.innerHTML += letter;
            displayedText += letter;
            await sleep(textSpeed);
        } else {
            moreText = true;
        }
    }
    if (moreText) {
        displayedText = displayedText.split('');
        displayedText.pop();
        displayedText = displayedText.join('');
        boxText.innerHTML = displayedText;
        nextText[3] = imgData;
        nextText[2] = textBackgroundImg;
        for (let i = 0; i < dialogText.length; i++) {
            if (displayedText[i] !== dialogText[i]) {
                nextText[0] += dialogText[i];
            }
        }
        nextText[1] = dialogData[1];
    } else {
        if (dialogData[1][0] != '@' && dialogData[1][0] != '%' && dialogData[1][0] != '|' && dialogData[1][0] != '~') {
            nextText[0] = storyObj.story.text[dialogData[1]][0];
            nextText[1] = storyObj.story.text[dialogData[1]][1];
            nextText[3] = storyObj.story.text[dialogData[1]][3];
            nextText[2] = storyObj.story.text[dialogData[1]][2];
        } else if (dialogData[1][0] == '|') {
            nextText[0] = dialogData[1];
            nextText[4] = dialogData[1].match('\|(.*?)\|').input;
            let notPipe = true;
            let nextStuff = [];
            let g = dialogData[1].length - 1;
            while (notPipe) {
                if (dialogData[1][g] != '|') {
                    nextStuff.push(dialogData[1][g]);
                    await sleep(1);
                } else { notPipe = false }
                g--;
            }
            nextStuff = nextStuff.reverse().join('');
            nextText[1] = nextStuff.toString();
        } else {
            nextText[0] = dialogData[1];
            nextText[1] = dialogData[1].match(/[a-zA-Z]+/).toString();
        }
    }

    clickable = true;
    let boxArrow = document.createElement('img');
    box.appendChild(boxArrow);
    boxArrow.setAttribute('src', '/images/arrow-down.gif');
    boxArrow.setAttribute('alt', 'Clicking Indicator');
    boxArrow.setAttribute('id', 'boxArrow');
}

//
function chooseOption(choice) {
    choice = choice.split(',');
    document.getElementById('body').style.backdropFilter = ``;
    document.getElementById('optionsDiv').remove();
    summonDialog('on');
    user.choicesMade.push(choice[0]);
    chaosCount += parseInt(choice[1]);
    updateDialog(storyObj.story.text[choice[2]]);
}

//this function creates the options for a choice
function createChoice(options) {
    summonDialog('off');
    let optionsDiv = document.createElement('div');
    optionsDiv.setAttribute('id', 'optionsDiv');
    for (let option of options) {
        let optButton = document.createElement('button');
        optButton.innerText = `${option[0]}`;
        optButton.setAttribute('onclick', `chooseOption('${option}')`);
        optionsDiv.appendChild(optButton);
    }
    let optionsBox = document.getElementById('mainView');
    optionsBox.appendChild(optionsDiv);
    document.getElementById('body').style.backdropFilter = `blur(5px) brightness(0.5)`;

}

//creates puzzle elements
function createPuzzle(puzzleNo) {
    movePage('puzzles');
    summonDialog('off');
    let puzzlePage = document.getElementById('puzzles');
    let puzzleBox = document.createElement('div');
    puzzleBox.id = 'puzzleBox';
    puzzleInfo = [];
    switch (puzzleNo) {
        case 1:
            puzzleInfo = [
                [{ image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'battery2.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 180 }]];
            curPuzzleSize = 5;
            break
        case 2:
            puzzleInfo = [
                [{ image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'battery.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }]];
            curPuzzleSize = 7;
            break
        case 3:
            puzzleInfo = [
                [{ image: 'node.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'battery.png', posStart: 0, posEnd: 180 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }]
                , [{ image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 90 }]
            ];
            curPuzzleSize = 9;
            break
        case 4:
            puzzleInfo = [
                [{ image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }]
                , [{ image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 'corner.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }]
                , [{ image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 'battery.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 180 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'corner.png', posStart: 0, posEnd: 90 }]
                , [{ image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 90 }]
                , [{ image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 90 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 180 }]
                , [{ image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 't-shape.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 270 }, { image: 't-shape.png', posStart: 0, posEnd: 270 }, { image: 'node.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'line.png', posStart: 0, posEnd: 90 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'corner.png', posStart: 0, posEnd: 90 }]
                , [{ image: 'node.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }, { image: 'corner.png', posStart: 0, posEnd: 270 }, { image: 'line.png', posStart: 0, posEnd: 0 }, { image: 't-shape.png', posStart: 0, posEnd: 0 }, { image: 'node.png', posStart: 0, posEnd: 90 }, { image: 'node.png', posStart: 0, posEnd: 180 }]
            ];
            curPuzzleSize = 11;
            break
    }

    let outterIndex = 0;
    for (let row of puzzleInfo) {
        let index = 0;
        let puzzleRow = document.createElement('div');
        for (let square of row) {
            let tile = document.createElement('button');
            tile.id = `circuitButton${outterIndex}${index}`;
            tile.setAttribute('onclick', `rotateButton(${outterIndex}, ${index})`);

            let tileImg = document.createElement('img');
            tileImg.src = `images/${square.image}`;
            tileImg.id = `circuitButtonImg${outterIndex}${index}`;
            tileImg.style.rotate = `${square.posStart}deg`

            tile.appendChild(tileImg);
            puzzleRow.appendChild(tile);

            index++;
        }
        outterIndex++;
        puzzleBox.appendChild(puzzleRow);
    }
    puzzlePage.appendChild(puzzleBox);
}

function rotateButton(num1, num2) {
    let rotation = document.getElementById(`circuitButtonImg${num1}${num2}`);
    let newRotation = parseInt(rotation.style.rotate.match(/\d+/g));
    newRotation += 90;
    if (newRotation != 360) {
        rotation.style.rotate = `${newRotation}deg`;
    } else {
        rotation.style.rotate = `0deg`
    }
    console.log(newRotation)
}

function checkPuzzle() {
    let puzzleBox = document.getElementById('puzzleBox');
    let outterIndex = 0;
    let counter = 0;
    for (let rows of puzzleBox.childNodes) {
        let index = 0;
        for (let tiles of rows.childNodes) {
            let tileImg = tiles.childNodes[0];
            if (puzzleInfo[outterIndex][index].image != 'line.png') {
                if (tileImg.style.rotate == `${puzzleInfo[outterIndex][index].posEnd}deg`) {
                    counter++;
                }
            } else {
                let edgeCase = 0;
                if ((parseInt(tileImg.style.rotate.match('[0-9]+'))) >= 180) {
                    edgeCase = (parseInt(tileImg.style.rotate.match('[0-9]+')) - 180);
                } else {
                    edgeCase = parseInt(tileImg.style.rotate.match('[0-9]+'));
                }
                if (edgeCase == puzzleInfo[outterIndex][index].posEnd) {
                    counter++;
                }
            }
            index++;
        }
        outterIndex++;
    }
    if (counter == (curPuzzleSize ** 2)) {
        if (document.getElementById('notificationDiv')) {
            document.getElementById('notificationDiv').remove();
        }
        puzzleBox.remove();
        movePage('mainView');
        summonDialog('on');
        updateDialog(storyObj.story.text[nextText[1]]);
    } else {
        let page = document.getElementById('puzzles');
        let notifDiv;
        if (document.getElementById('notificationDiv')) {
            document.getElementById('notificationDiv').remove();
        }
        notifDiv = document.createElement('div');
        notifDiv.id = 'notificationDiv';
        notifDiv.innerHTML = `<h2>Circuit has Failed</h2>`;
        page.appendChild(notifDiv);
    }
}

function startBattle(enemy) {
    movePage('battle');
    summonDialog('frickOff');
    updateBackground('battleBackground.gif', 'battle');
    let enemy2;
    for (let j = 0; j < enemies2.length; j++) {
        if (enemy.match(enemies2[j])) {
            enemy2 = enemies[j];
        }
    }
    let enemyImg = document.createElement('img');
    enemyImg.src = `images/${enemy2.image}`;
    enemyImg.id = 'enemyBattleImg';
    let container = document.getElementById('battle');
    container.insertBefore(enemyImg, container.firstChild);
    document.getElementById(`battleText`).innerHTML = `<p>${enemy2.name} has decided to brawl!</p>`;
    document.getElementById('attackButton').setAttribute('onclick', `changeBattleScreen('attack', '${enemy2.name}', '${enemy2.id}')`);
    document.getElementById('itemsButton').setAttribute('onclick', `movePage('inventory')`);
}

//
async function combatSys(type, target, action) {
    let container = document.getElementById('battleText');
    let buttons = document.getElementById('battleButtons');
    let timeOut = 3000;
    buttons.style.display = 'none';
    container.style.display = 'unset';
    let target2;
    let target3;
    for (let j = 0; j < enemies2.length; j++) {
        if (target.match(enemies2[j])) {
            target2 = enemies[j];
        }
    }
    if (type == 'attack') {
        target2.health -= (user.damage);
        container.innerHTML = `<p>You have attacked ${target2.name} for ${user.damage}hp, leaving them at ${target2.health}hp</p>`;
        await sleep(timeOut);
    } else {
        for (let j = 0; j < items2.length; j++) {
            if (action.match(items2[j])) {
                target3 = items[j];
            }
        }
        if (target3.type == 'Healing') {
            user.health += target3.healingAmount;
            user.defense += target3.defense;
            container.innerHTML = `<p>You have healed yourself for ${target3.healingAmount}hp using ${target3.name}</p>`;
        } else if (target3.type == 'Weapon/Melee') {
            container.innerHTML = `<p>You have hit ${target2.name} for ${target3.damage}hp</p>`;
        } else {
            container.innerHTML = `<p>You shot ${target2.name} for ${target3.damage}hp, woah!</p>`;
        }
        await sleep(timeOut);
    }
    if (target2.health <= 0) {
        container.innerHTML = `<p>You have defeated ${target2.name}</p>`;
        await sleep(timeOut);
        endBattle(false);
    } else {
        if (user.defense < 0 || typeof user.defense != (typeof 1)) { user.defense = 0 }
        let subtract = target2.damage - user.defense;
        user.health -= subtract;
        container.innerHTML = `<p>You have been attacked by ${target2.name} for ${subtract}hp, leaving you at ${user.health}hp</p>`;
        updateHealthBar((user.health / 5), true);
        await sleep(timeOut);
        container.innerHTML = `<p>${target2.name} is standing there, menacingly!`;
        buttons.style.display = 'unset';
    }
    if (user.health <= 0) {
        buttons.style.display = 'none';
        container.innerHTML = `<p>${target2.name} has felled you!</p>`;
        await sleep(timeOut);
        endBattle(false);
    }
}

function changeBattleScreen(newPage, avalibleEnemies, enemyId) {
    let container = document.getElementById('battleText');
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.justifyContent = 'space-evenly';
    container.style.alignItems = 'center';
    if (newPage == 'attack') {
        for (let i = 0; i < 1; i++) {
            container.innerHTML += `<button onclick='combatSys("attack", this.id)' id='${enemyId}'>${avalibleEnemies}</button>`;
        }
    } else {
        for (let i = 0; i < user.items.length; i++) {
            container.innerHTML += `<button onclick='combatSys("item", "${enemyId}", this.id)' id='${user.items[i].name}'>${user.items[i].name}</button>`;
        }
    }
}

function endBattle(death) {
    document.getElementById('enemyBattleImg').remove();
    if (!death) {
        movePage('mainView');
        summonDialog('on');
        updateDialog(storyObj.story.text[nextText[1]]);
        getRewards();
        inventoryMake(2);
    } else {
        endGame('deadIdiot');
    }
}

function getRewards() {
    let randNum = Math.trunc(Math.random() * 100);
    let itemGained = '';
    let amountGained = Math.trunc(Math.random() * 10);
    let hasItem = false;
    let currentItem;
    if (randNum > 94) {
        itemGained = 'TechnoBlade';
    } else if (randNum > 80) {
        itemGained = 'Nanites';
    }else if (randNum > 65) {
        itemGained = 'Stim-Boost';
    }else if (randNum > 48) {
        itemGained = 'Pistol';
    }else if (randNum > 20) {
        itemGained = 'Bat';
    }else if (randNum > 10) {
        itemGained = 'Knife';
    }else{
        itemGained = 'Shiv';
        amountGained = 1;
    }

    for (let userItem of user.items) {
        if (userItem.name == itemGained) {
            hasItem = true;
            currentItem = userItem;
        }
    }

    if (hasItem) {
        let currentItem2;
        if (currentItem.type == 'Weapon/Melee' || currentItem.type == 'Weapon/Ranged') {
            //transform into stimboost
            let hasThisItem = false;
            for (let j = 0; j < user.items.length; j++) {
                if (user.items[j].name == 'Stim-Boost') {
                    hasThisItem = true;
                    currentItem2 = user.items[j];
                }
            }
            if (!hasThisItem) {
                for (let k = 0; k < items2.length; k++) {
                    if (items2[k] == 'Stim-Boost') {
                        user.items.push(items[k]);
                        user.items[user.items.length - 1].value = amountGained;
                    }
                }
            } else {
                currentItem2.value += amountGained;
            }
        } else {
            currentItem.value += parseInt(amountGained);
        }
    } else {
        for (let i = 0; i < items2.length; i++) {
            if (itemGained == items2[i]) {
                user.items.push(items[i]);
                if (userItem.type == 'Healing') {
                    user.items[user.items.length - 1].value = amountGained;
                }
            }
        }
    }
}



async function preloadImage() {
    for (i = 0; i < preload.length; i++) {
        images[i] = new Image();
        images[i].src = preload[i];
    }
    return new Promise(resolve => {
        setTimeout(function () {
            resolve("\t\t This is second promise");
            console.log("Returned second promise");
        });
    });
}

function endGame(winState) {
    let endScreen = document.createElement('section');
    endScreen.setAttribute('class', 'page');
    endScreen.id = 'endScreen';
    document.getElementById('body').appendChild(endScreen);
    if (winState == 'win') {
        updateBackground('building-outside-15.avif', 'endScreen');
    } else {
        updateBackground('you-died.avif', 'endScreen');
    }
    let retryButton = document.createElement('button');
    retryButton.setAttribute('onclick', 'movePage("mainMenu")');
    retryButton.id = 'retryButton';
    retryButton.innerText = 'Restart?'
    endScreen.appendChild(retryButton);
    movePage('endScreen');
}

//pauses functions
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

//event listeners
//this listener looks for all clicks done on the page and updates dialog if it's done loading
document.addEventListener('click', () => {
    if (clickable) {
        clickable = false;
        if (nextText[0][0] == '@') {
            createChoice(storyObj.choices[nextText[0][1]]);
        } else if (nextText[0][0] == '%') {
            createPuzzle(parseInt(nextText[0][1]));
        } else if (nextText[0][0] == '|') {
            startBattle(nextText[4]);
        } else if (nextText[0][0] == '~') {
            playVideo();
        } else {
            updateDialog(nextText);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadingAnimation();
    inventoryMake(2)

    document.getElementById('volumeGroup').addEventListener("input", (e) => {
        if (e.target.id == 'volumeNum') {
            document.getElementById('volumeSlide').value = e.target.value;
        } else {
            document.getElementById('volumeNum').value = e.target.value;
        }
        volume = e.target.value;
    });

    document.getElementById('textSpeedGroup').addEventListener("input", (e) => {
        if (e.target.id == 'textSpeedNum') {
            document.getElementById('textSpeedSlide').value = e.target.value;
        } else {
            document.getElementById('textSpeedNum').value = e.target.value;
        }
        textSpeed = e.target.value;
    });
});


// Object.values(storyObj.story.text).forEach(value => {textArray.push(value)})
// for (i = 1; i < textArray.length; i++ ) {
//     updateDialog(textArray[i])
// }