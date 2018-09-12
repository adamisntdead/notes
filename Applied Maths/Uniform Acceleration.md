---
title: 'Uniform Acceleration - Leaving Cert Applied Maths'
header-includes:
  - \usepackage{tikz}
  - \setkeys{Gin}{width=\maxwidth,height=.3\maxheight,keepaspectratio}
---

In this section, **linear motion** with **constant acceleration** is studied. *Motion* is a change in the position of a particle. *Linear* motion is motion in one dimension. In the questions these apply to, this means up and down, forwards and backwards and so on. 

\section*{Summary}

- $v$: final velocity
- $u$: initial velocity 
- $a$: acceleration
- $s$: displacement
- $t$: time

These quantities are related through the following equations:

\begin{align}
  v &= u + at \label{eq1} \\
  s &= \frac{(u + v)}{2} t \label{eq2} \\
  s &= ut + \frac{1}{2} at^2 \label{eq3} \\
  v^2 &= u^2 + 2as \label{eq4} \\
\end{align}

# Vector Quantities and Scalar Quantities

In the leaving cert applied maths course, there are two types of quantities to think about, vector quantities and scalar quantities.

\begin{definition}{Scalar Quantity}
A quantity with magnitude only.
\end{definition}

\begin{definition}{Vector Quantity}
A quantity with both magnitude and direction
\end{definition}

Examples of each of these are

| Scalar Quantity | Vector Quantity |
|-----------------|-----------------|
| Distance        | Displacement    |
| Speed           | Velocity        |
| Length          | Acceleration    |
| Area            | Force           |

You should note that sometimes a vector quantity $a$ may be referred to as $\overrightarrow{a}$.

# Displacement, Velocity and Acceleration

\begin{definition}{Displacement}
The change in the position of an object,

$$
s = \Delta x = x_f - x_i
$$
\end{definition}

Where $x_f$ refers to the value of the final position, $x_i$ refers to the initial position, and both $s$ and $\Delta x$ refer to displacement. Displacement is a vector quantity. In the course, displacement is usually measured in metres ($m$).

\begin{definition}{Average Velocity}
$$
\overline{v} = \frac{s}{t} = \frac{\text{change in position}}{\text{change in time}} = \frac{\Delta x}{\Delta t}
$$
\end{definition}

Velocity is a vector quantity. It's unit is usually  $ms^{-1}$.

You should know the difference between average velocity and instantaneous velocity. Instantaneous velocity is just the velocity at a specific instant in time, in other words, the average velocity over an infinitesimally small time interval.

\begin{definition}{Instantaneous Velocity}
Velocity at a specific instant in time.

$$
v = \lim_{\Delta t \rightarrow 0} \frac{s}{\Delta t}
$$

\end{definition}

\begin{definition}{Acceleration}

Accleration is the rate of change of velocity.
$$
a =\frac{\Delta v}{\Delta t} = \frac{v - u}{t}
$$
\end{definition}



Here, $v$ represents the final velocity and $u$ represents the initial velocity. This convention of $u$ and $v$ are used throughout the course. The unit for acceleration is usually $ms^{-2}$ (metres per second per second).


# Velocity-Time Graphs

Velocity-Time graphs, while hard to interpret, are quite useful. They have a number of properties:

* The slope of a velocity-time graphs represents acceleration
* The area under a velocity-time graph represents the displacement of the object

## Slope Of A Velocity-Time Graph

Consider the following velocity-time graph:

\begin{figure}
	\centering

\begin{tikzpicture}[scale=2]
    % Draw axes
    \draw [<->,thick] (0,2) node (yaxis) [above] {$v(m/s)$} |- (2.25,0) node (xaxis) [right] {$t(s)$};
        
    % Draw Main
    \draw [thick] (0,0) coordinate (a_1) -- (2,2) coordinate (a_2);

  	% Draw Slope
    \draw [dashed, red] (0.5, 0.5) -- (1.5, 0.5) coordinate (end) node [midway,fill=white] {run};
    \draw [dashed, blue] (1.5, 1.5) -- (end) node [midway,fill=white] {rise};
    
    % Tick marks
    \draw [-] (0.5, -0.03) -- (0.5, 0.03) node [label=below:$t_i$] {};
    \draw [-] (1.5, -0.03) -- (1.5, 0.03) node [label=below:$t_f$] {};
    \draw [-] (-0.03, 0.5) -- (0.03, 0.5) node [label=left:$u$] {};
    \draw [-] (-0.03, 1.5) -- (0.03, 1.5) node [label=left:$v_f$] {};
\end{tikzpicture}
\end{figure}



Since $\frac{\Delta v}{\Delta t}$ is the definition of acceleration, the slope of a velocity graph must equal the acceleration of the object.



## Area Under A Velocity-Time Graph

\begin{theorem}{Area Under A Velocity-Time Graph}
\label{time-velocity}

The area under a velocity-time graph is equal to the distance travelled.

\end{theorem}

\begin{proof}

\begin{figure}
\centering
\begin{tikzpicture}[scale=2]
    % Draw axes
    \draw [-,thick] (0,1.75) |- (2.25,0);
        
    % Draw Main
    \draw [thick] (0,0.5) coordinate (u) -- (2,1.5) coordinate (v);
    
  	% Draw Slope
    \draw [dashed] (2, 0) -- (2, 1.5);
    \draw[dashed] (u) -- (v |- u);
%    \draw [dashed] (1.5, 1.5) -- (end) node [midway,fill=white] {rise};
    
    % Labels
    \node[label=below:$t$] at (1.125, 0) {};
%    % Tick marks
%    \draw [-] (0.5, -0.03) -- (0.5, 0.03) node [label=below:$t_i$] {};
%    \draw [-] (1.5, -0.03) -- (1.5, 0.03) node [label=below:$t_f$] {};
    \draw [-] (-0.03, 0.5) -- (0.03, 0.5) node [label=left:$u$] {};
    \draw [-] (-0.03, 1.5) -- (0.03, 1.5) node [label=left:$v$] {};
\end{tikzpicture}

\end{figure}

Since $v = u+at$ (see equation \ref{eq1}), the gap between $u$ and $v$ is of length $at$. The area under the curve is the sum of the area of a rectangle and a triangle. 

\begin{figure}
\centering
\begin{tikzpicture}[scale=2]
\draw (0,0) -- node[below] {$t$} (2,0) -- (2,0.5) --  (0,0.5) -- node[left] {$u$} (0, 0);
\draw (0,-0.7) -- node[below] {$t$} (2,-0.7) -- node[right] {$at$} (2,-0.2) -- cycle;
\end{tikzpicture}
\end{figure}

$$
\text{area of rectangle} = ut
$$

$$
\text{area of triangle} = \frac{a}{2} t^2
$$

Adding these,

$$
\text{total area} = ut + \frac{a}{2} t^2
$$

Which is $s$, the distance covered (see equation \ref{eq3}).
\end{proof}

# Kinematic Formulae \label{formulas}

The kinematic formulae are a set of equations that relate the five kinematic variables, $s$: displacement, $t$: time interval,
$u$: initial velocity, $v$: final velocity and $a$: constant acceleration.

The formulae (and their proofs) are stated here.

\begin{theorem}{First Kinematic Formula}
$$
v = u + at
$$
\end{theorem}
\begin{proof}

This formula can be derived by starting with the definition of acceleration, 
and solving for $v$.

\begin{align*}
a &= \frac{v - u}{t}\\
\implies v - u &= at\\
\implies v &= at + u
\end{align*}

\end{proof}


\begin{theorem}{Second Kinematic Formula}
$$
s = (\frac{u + v}{2}) t
$$
\end{theorem}
\begin{proof}
Since the acceleration is constant, the average velocity can be found by averaging the initial and final velocities.

$$
\overline{v} = \frac{u + v}{2}
$$

by the definition of $v$, 

$$
  v = \frac{s}{t} \implies s = vt = (\frac{u + v}{2}) t 
$$
\end{proof}


\begin{theorem}{Third Kinematic Formula}
$$
s = ut + \frac{a}{2}t^2
$$
\end{theorem}
\begin{proof}
This proof can be done in a number of ways. For the geometric proof, see theorem \ref{time-velocity}.
I prefer a proof involving a small amount of simple calculus.
By integrating the first kinematic equation (for velocity), you will get the displacement:

\begin{align*}
\int v dt &= \int u + at dt \\
&= ut + \frac{a}{2}t^2
\end{align*}

\end{proof}

\begin{theorem}{Fourth Kinematic Formula}
$$
v^2 = u^2 + 2as
$$
\end{theorem}
\begin{proof}
This can be proven by solving the first kinematic formula for $t$.

$$
v = u + at \implies t = \frac{v - u}{a}
$$

Taking this and using it again with the first formula

\begin{align*}
v^2 &= (u + at)^2 \\
&= u^2 + 2uat + a^2 t^2 \\
&= u^2 + 2a(ut + \frac{a}{2}t^2)\\
&= u^2 = 2as
\end{align*}
\end{proof}