---
large: true
title: 'Deriving Newtons Laws from the Principle of Least Action'
header-includes:
  - \usepackage{tikz}
  - \tikzset{every picture/.style={line width=0.75pt}}

---


# Newtonian Mechanics

In the last 250 years, classical mechanics has been completely described from a single principle. This principle is known as \emph{the principle of least action}, and was developed by William Rowan Hamilton.
In this section, this principle will be examined, starting by considering Newtons laws.

Consider a single particle at position $\vec{r}(t)$, acted on by a force $\vec{F}$.
This force can be thought of as the sum of many different forces.

\begin{center}

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
%uncomment if require: \path (0,300); %set diagram left start at 0, and has height of 300

%Straight Lines [id:da9234411541321457] 
\draw [line width=1.5]    (300.5,153) -- (447.86,73.43) ;
\draw [shift={(450.5,72)}, rotate = 511.63] [fill={rgb, 255:red, 0; green, 0; blue, 0 }  ][line width=1.5]  [draw opacity=0] (11.61,-5.58) -- (0,0) -- (11.61,5.58) -- cycle    ;

%Straight Lines [id:da524580019161314] 
\draw [color={rgb, 255:red, 155; green, 155; blue, 155 }  ,draw opacity=1 ][line width=1.5]    (300.5,153) -- (329.04,101.62) ;
\draw [shift={(330.5,99)}, rotate = 479.05] [fill={rgb, 255:red, 155; green, 155; blue, 155 }  ,fill opacity=1 ][line width=1.5]  [draw opacity=0] (11.61,-5.58) -- (0,0) -- (11.61,5.58) -- cycle    ;

%Straight Lines [id:da09087918472079448] 
\draw [color={rgb, 255:red, 155; green, 155; blue, 155 }  ,draw opacity=1 ][line width=1.5]    (300.5,153) -- (247.7,120.73) ;
\draw [shift={(245.14,119.17)}, rotate = 391.43] [fill={rgb, 255:red, 155; green, 155; blue, 155 }  ,fill opacity=1 ][line width=1.5]  [draw opacity=0] (11.61,-5.58) -- (0,0) -- (11.61,5.58) -- cycle    ;

%Straight Lines [id:da6999871440760504] 
\draw [color={rgb, 255:red, 155; green, 155; blue, 155 }  ,draw opacity=1 ][line width=1.5]    (300.5,153) -- (426.83,167.49) ;
\draw [shift={(429.81,167.83)}, rotate = 186.54] [fill={rgb, 255:red, 155; green, 155; blue, 155 }  ,fill opacity=1 ][line width=1.5]  [draw opacity=0] (11.61,-5.58) -- (0,0) -- (11.61,5.58) -- cycle    ;

%Straight Lines [id:da2904674958022473] 
\draw [color={rgb, 255:red, 155; green, 155; blue, 155 }  ,draw opacity=1 ][line width=1.5]    (300.5,153) -- (316.44,170.29) ;
\draw [shift={(318.48,172.5)}, rotate = 227.32999999999998] [fill={rgb, 255:red, 155; green, 155; blue, 155 }  ,fill opacity=1 ][line width=1.5]  [draw opacity=0] (11.61,-5.58) -- (0,0) -- (11.61,5.58) -- cycle    ;

%Shape: Circle [id:dp22538160509872718] 
\draw  [color={rgb, 255:red, 0; green, 0; blue, 0 }  ,draw opacity=0 ][fill={rgb, 255:red, 208; green, 2; blue, 27 }  ,fill opacity=1 ] (296.88,153) .. controls (296.88,151) and (298.5,149.38) .. (300.5,149.38) .. controls (302.5,149.38) and (304.13,151) .. (304.13,153) .. controls (304.13,155) and (302.5,156.63) .. (300.5,156.63) .. controls (298.5,156.63) and (296.88,155) .. (296.88,153) -- cycle ;

% Text Node
\draw (284,166) node   {$\vec{r}(t)$};
% Text Node
\draw (462,71) node   {$\vec{F}$};


\end{tikzpicture}
\end{center}

Newtonian mechanics states that

$$
\vec{F} = m\vec{a} = m\ddot{\vec{r}}.
$$

It is the aim of classical mechanics to solve this equation for forces such as gravity, friction and so on.
This equation is a second-order differential equation, thus it's solution has two constants of integration.
These constants correspond with the initial position $\vec{r}(t_1)$ and initial velocity $\dot{\vec{r}}(t_1)$ of the particle being considered.

# Principle Of Least Action

Instead of specifying the initial position and velocity, consider instead the initial and final positions, $\vec{r}(t_1)$ and $\vec{r}(t_2)$. Consider also all of the possible paths that could connect them (here a few are shown):

\begin{center}     

\begin{tikzpicture}[x=0.75pt,y=0.75pt,yscale=-1,xscale=1]
%uncomment if require: \path (0,300); %set diagram left start at 0, and has height of 300

%Curve Lines [id:da9160940321380647] 
\draw    (300.5,154) .. controls (375.17,148) and (322.5,132) .. (343.83,124) .. controls (365.17,116) and (370.13,76) .. (448.5,80.67) ;


%Curve Lines [id:da4541442214707516] 
\draw    (300.5,154) .. controls (309.17,261.33) and (338.5,138) .. (378.5,174) .. controls (418.5,210) and (423.5,105.67) .. (448.5,80.67) ;


%Shape: Circle [id:dp22538160509872718] 
\draw  [color={rgb, 255:red, 0; green, 0; blue, 0 }  ,draw opacity=0 ][fill={rgb, 255:red, 208; green, 2; blue, 27 }  ,fill opacity=1 ] (296.88,154) .. controls (296.88,152) and (298.5,150.38) .. (300.5,150.38) .. controls (302.5,150.38) and (304.13,152) .. (304.13,154) .. controls (304.13,156) and (302.5,157.63) .. (300.5,157.63) .. controls (298.5,157.63) and (296.88,156) .. (296.88,154) -- cycle ;
%Shape: Circle [id:dp72190240042748] 
\draw  [color={rgb, 255:red, 0; green, 0; blue, 0 }  ,draw opacity=0 ][fill={rgb, 255:red, 208; green, 2; blue, 27 }  ,fill opacity=1 ] (444.88,80.67) .. controls (444.88,78.66) and (446.5,77.04) .. (448.5,77.04) .. controls (450.5,77.04) and (452.13,78.66) .. (452.13,80.67) .. controls (452.13,82.67) and (450.5,84.29) .. (448.5,84.29) .. controls (446.5,84.29) and (444.88,82.67) .. (444.88,80.67) -- cycle ;
%Curve Lines [id:da9524706540069721] 
\draw    (300.5,154) .. controls (320.5,164.67) and (369.83,164) .. (448.5,80.67) ;



% Text Node
\draw (284,166) node   {$\vec{r}( t_{1})$};
% Text Node
\draw (471,67) node   {$\vec{r}( t_{2})$};


\end{tikzpicture}

\end{center}

What path does the particle take? That is the question that the \emph{principle of least action} addresses.
First, let me introduce the \emph{action}

\begin{definition}{Action}
For each path $\vec{r}(t)$, the \emph{action} is
$$
S_{\vec{r}(t)} = \int_{t_1}^{t_2} T - V \,dt,
$$

Where $T$ is the kinetic energy, and $V$ is the potential energy.
\end{definition}

This may look somewhat arbitrary, but it comes together with the following theorem:

\begin{theorem}{Principle of Least Action}
The true path taken by the particle is an extremum of the action $S$.
\end{theorem}

The finding of an extremum of a function is well known, and comes from elementary differential calculus. However, if you examine the action you will see that it is an integral, and thus a function of a function. This is known as a \emph{functional}, and is solved using a branch of maths called the `calculus of variations'.
The proof of this theorem is above the level of this document.

# The Lagrangian

If you look at the definition of the action, there is a special name for the integrand.

\begin{definition}{Lagrangian}
The integrand of the action is called the \emph{Lagrangian} $L$, where

$$
L(\vec{r}, \dot{\vec{r}}, t) = T - V
$$

Thus $S = \int_{t_1}^{t_2} L \,dt$.
\end{definition}

In a simple example, the kinetic energy is
$T = \frac{1}{2}m \dot{\vec{r}}^2$
and potential energy is $V(\vec{r})$.
From this we can define a generalized momentum $\vec{P}$ and a generalized force $\vec{F}$,


\begin{align*}
\vec{P} &= \frac{\partial L}{\partial \dot{\vec{r}}}\\
\vec{F} &= \frac{\partial L}{\partial \vec{r}}.
\end{align*}

Following from this, we can rewrite Newton's equations as

$$
\frac{d \vec{P}}{dt} = \vec{F} \implies \frac{d}{dt} (\frac{\partial L}{\partial \dot{\vec{r}}}) = \frac{\partial L}{\partial \vec{r}}.
$$

This is known as the \emph{Euler-Lagrange equation}.