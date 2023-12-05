	
		let video = document.querySelector('.video');
		let btnV = document.querySelectorAll('.btnV ');
		let ac = document.querySelector('.ac ');
		console.log(ac)

		ac.classList.add('activePa')
		
		btnV.forEach(e=>{
			e.addEventListener('click',()=>{
				let play ;
				let pause ;
				
				if(e.classList.contains('pause')){
					video.pause();
					ac.classList.remove('activePl')
					ac.classList.add('activePa')
					
				}
				if(e.classList.contains('play')){
					video.play()
					ac.classList.remove('activePa')
					ac.classList.add('activePl')
					
				}
				
			
			})

		})
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
