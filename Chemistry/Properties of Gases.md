---
title: Properties of Gases 
header-includes:
  - \usepackage{chemformula}
  - \usepackage{siunitx}
---

\begin{definition}{Gas}
A substance that has no well-defined boundaries and diffuses to fill any container in which it is placed.
\end{definition}

# Diffusion

\begin{definition}{Diffusion}
Diffusion is the spontaneous spreading out of a substance, and is due to the natural movement of its particles.
\end{definition}

* The volume of a sample of gas depends on it's temperature and pressure.

# Units

## Temperature

* We use the Kelvin scale of temperature for calculations. 
* To convert $^\circ C$ to $K$, add 273.
* $0^\circ C = 273K$ (standard temperature).

## Pressure

* Units are Pascals (Pa).
* $1 \times 10^5 Pa$ is normal atmospheric pressure or standard pressure.

## Volume 

* Measured in $cm^3$
* Labelled as $L$ (liters)
* $1L = 1000cm^3$

# Boyle's Law

![A diagram of Boyle's original data](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boyles_Law.svg/1920px-Boyles_Law.svg.png)

* Boyle used a vacuum pump to investigate the way the volume of air varied with changing pressure.
* Boyle saw a relationship in his results and came up with boyle's law.

\begin{definition}{Boyle's Law}
At a constant temperature the volume of a given mass of any gas is inversely proportional to the pressure of the gas.
\end{definition}

# Charles' Law

![A graph showing Charles' Law](http://cimg2.ck12.org/datastreams/f-d%3A36f4b9dd51fa1b9220356f72930e206eb4d468437666db8ae8ce2d32%2BIMAGE%2BIMAGE.1)

* Jacques Charles.
* Discovered that equal volumes of different gasses at constant pressure all expanded by the same amount when there is a rise in temperature.

\begin{definition}{Charles' Law}
At constant pressure the volume of a given mass of any gas is directly proportional to the Kelvin temperature.
\end{definition}

# Combined Gas Laws

$$
\frac{p_1 V_1}{T_1} = \frac{p_2 V_2}{T_2}
$$

* Used to convert volume of a fixed mass of gas under one set of conditions of temperature and pressure to another.
* This formula is not in the log tables!

\begin{example}{{A sample of gas exerts a pressure of $83,326Pa$ in a $300cm^3$ vessel at $25^\circ C$.
What pressure would this gas sample exert if it were placed in a $500cm^3$ container at $50^\circ C$? 
}}
\Solution

\begin{align*}
P_1 &= 83,326 Pa  & P_2 &= ? \\
V_1 &= 300cm^3   &    V_2 &= 500cm^2\\
T_1 &= 25 + 273 = 298K   &    T_2 &= 50 + 273 = 323K
\end{align*}

Note that the temperature must be in Kelvin.

\begin{align*}
  \frac{p_1 V_1}{T_1} &= \frac{p_2 V_2}{T_2} \\
  \implies \frac{83326 \times 300}{298} &= \frac{p_2 \times 500}{323} \\
  \implies \frac{83326\times 300 \times 323}{298 \times 500} &= p_2\\
  \implies p_2 &= 54189.86 Pa
\end{align*}

\end{example}

# Gay-Lussac's Law

\begin{definition}{Gay-Lussac's Law}
In a reaction between gases at the same temperature and pressure, the volumes of the reacting gases, and gaseous products, are in simple whole number ratios.
\end{definition}

# Avagadro's Law

\begin{definition}{Avagadro's Law}
Equal volumes of gasses under the same conditions of temperature and pressure, 
contain equal number of molecules.
\end{definition}

# Molar Volume

* The volume occupied by one one mole of gas:
  * Molar volume at s.t.p. is $24.4L$ ($22400cm^3$).
  * Molar volume at room temperature is $24L$.
* These values are not given.

\begin{example}{{
Calculate the density of \ch{NH3} at s.t.p.
}}
\Solution
$Mr = 14 + 3 = 17$,

Density = $17/22.4 = 0.7589g/L$.
\end{example}

\begin{example}{{
Given the molar volume is $22.4L$ at $s.t.p$, calculate the density of each of the following gases at s.t.p:

\begin{enumerate}
  \item Nitrogen, \ch{N2}.
  \item Chlorine, \ch{Cl2}.
  \item Methane, \ch{CH4}.
  \item Oxygen, \ch{O2}.
  \utem Ozone, \ch{O3}.
\end{enumerate}
}}
\Solution

The masses are given as $\ch{H} = 1$, $\ch{C} = 12$, $\ch{N} = 14$, $\ch{O} = 16$, $\ch{Cl} = 35.5$.

\begin{enumerate}
  \item $(14 * 2) / 22.4 = 1.25$.
  \item $(35.5 * 2) / 22.4 = 3.1696428574$.
  \item $(12 + 4) / 22.4 = 0.714285714$.
  \item $(16 * 2) / 22.4 = 1.428571429$.
  \item $(16 * 3) / 22.4 2.142857143$.
\end{enumerate}
\end{example}

# The Kinetic Theory of Gasses

* The kinetic theory of gasses was developed by James Clerk Maxwell and Ludwig Boltzmann.

\begin{definition}{Kinetic Theory of Gases}
\begin{enumerate}
\item Gases are made up of particles that are in continuous, rapid, random motion, colliding with each other and the walls of the container.
\item There are no attractive or repulsive forces between these particles.
\item The gas particles are so small and separated that the total volume of all the particles negligible compared with the space they occupy.
\item All collisions are perfectly elastic (No loss of energy in collisions).
\item Average kinetic energy of particles in a sample of gas is proportional to the temperature measured on the Kelvin scale.
\end{enumerate}
\end{definition}

## Ideal Gases

\begin{definition}{Ideal Gas}
A gas that obeys all of the gas laws and under all conditions of temperature and pressure.
\end{definition}

* No such gases exists, but real gases behave most like an ideal gas at high temperatures and at low pressures.
* Under these conditions, the particles of a real gas are relatively far away from each other, and the assumptions of the kinetic theory are reasonably valid.

## Equation of State for an Ideal Gas

$$
pV = nRT
$$

Where $p$ is pressure in $Pa$, $V$ is volume in $m^3$, $n$ is the number of moles, $R$ is the gas constant $JK^{-1}mol^{-1}$ and $T$ is temperature in Kelvin.