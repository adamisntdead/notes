---
title: Reflection of Light from Spherical Mirrors
header-includes:
  - \usetikzlibrary{optics}
  - \usetikzlibrary{calc}
  - \usetikzlibrary{shapes}
---


There are two types of spherical mirror; Concave and Convex.

\begin{definition}{Concave Mirror}
A mirror 'caves in' at the center
\end{definition}

\begin{definition}{Convex Mirror}
A concave mirror 'bulges out' at the center
\end{definition}

## Real and Virtual Images

\begin{definition}{Real Image}
An image formed by the actual intersection of light rays. A real image can be located on a screen.
\end{definition}

\begin{definition}{Virtual Image}
An image formed by the \emph{apparent} intersection of light rays.
A virtual image cannot be formed on a screen (because there are no actual rays to intersect behind the mirror).
\end{definition}

\begin{figure}
	\centering

\begin{tikzpicture}[use optics]
	% mirror
	\node[
		spherical mirror, 
	  	name=M,  
	  	object height=10cm,
	  	spherical mirror angle=from_radius(10cm),
	  	draw mirror focus={label=below:$f$}, 
	  	draw mirror center={red, label=below:$c$}
	] (M) at (0,0) {};
	
	% Mirror intersection
	\coordinate (P1) at (M.22);

	% baseline
	\draw (M.arc center) -- ($ (M.mirror center) - (3,0) $);
	
	% object
	\coordinate (Obj_Start) at ($ (M.mirror center) $);
	\coordinate (Obj_End) at (Obj_Start |- M.22);
	\draw [->] (Obj_Start) -- (Obj_End) node[midway,left] {Object};
	
	% calculating the location of the image
	\coordinate (P2) at (M.arc center);
	\path let \p1 = (Obj_End) in coordinate (Obj_Inv) at (\x1,-\y1);
	\coordinate (Image_End) at (intersection of P1--M.focus and P2--Obj_Inv);
	
	
	% image
	\coordinate (Image_Start) at (Image_End |- Obj_Start);
	\draw [->] (Image_Start) -- (Image_End) node[midway,left] {Image};
	
	\begin{scope}[violet]
		% ray to the mirror pole (Incident Ray)
  		\draw[->-] (Obj_End) -- (P2);
		
		% ray to the image (Reflected Ray)
  		\draw[->, shorten >=-2cm] (P2) -- (Image_End);
	\end{scope}
	
	\begin{scope}[red]
		% ray from the top of the object to the mirror, 
		% parallel with the baseline
  		\draw[->-] (Obj_End) -- (P1);
  		
  		% ray through the focus
  		\draw[->, shorten >=-2cm] (P1) -- (Image_End);  		
	\end{scope}
\end{tikzpicture}

  \caption{When the object is behind the center ($c$), the image is between $c$ and the focus ($f$). The image is diminished. It is also real, and by extension inverted.}
\end{figure}


There is a relation

$$
\frac{1}{v} + \frac{1}{u} = \frac{1}{f}
$$

And 

$$
m = \frac{\text{object height}}{\text{image height}} = \frac{v}{u}
$$