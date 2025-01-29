import React from 'react'

const About = () => {
    return (
        <div>
            <div className="about-section flex justify-center items-start flex-col mr-60 ml-60 h-[100vh] " id='about-section'>
                <h2 className='text-6xl mb-5'>What Is Plants For Plans?</h2>
                <div className='flex flex-col justify-center items-center w-full ' style={{ fontFamily: 'Outfit', fontWeight: 200, fontSize: '22px' }}>
                    <p >
                        <span className='mr-3 text-3xl' style={{ fontFamily: 'Pixelify Sans' }}>Plants For Plans</span>
                        is a unique productivity app designed to help you break free from unnecessary phone usage and stay focused on what truly matters. Instead of mindlessly scrolling, you nurture a virtual plant that grows on block-like ground—each block representing the time you commit to staying off your phone. The more time you resist distractions, the more your plant flourishes, creating a visual representation of your progress and self-discipline. Whether you're studying, working, or simply trying to be more present in your daily life, [Your App Name] turns productivity into a fun and rewarding experience.
                    </p>
                    <p>
                        encourages focus by motivating you to stay off your phone and track your progress visually through a growing plant. It helps build healthy habits by reducing screen time and improving time management. The app turns productivity into an interactive experience, making it both fun and rewarding. With a custom growth system where each block represents your effort and commitment, you can see your achievements grow—literally—one block at a time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About