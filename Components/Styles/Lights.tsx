import React from 'react'

export const Lights = () => {
    return (
        <><div className='lights'/>
		<style jsx>{`
			.lights {
				background: radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 50%),
              radial-gradient(at 97% 21%, hsla(256, 98%, 72%, 1) 0px, transparent 50%),
              radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 1) 0px, transparent 50%),
              radial-gradient(at 10% 29%, hsla(133, 96%, 67%, 1) 0px, transparent 50%),
              radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 1) 0px, transparent 50%),
              radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 1) 0px, transparent 50%),
              radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 1) 0px, transparent 50%);
				position: absolute;
				content: "";
            	width: 100%;
				height: 100%;
				filter: blur(100px) saturate(150%);
				opacity: 0.1;
				transform: translateZ(0);
			}
		`}</style>
		</>
    )
}
