---
large: true
title: 'Algebra 1 - Leaving Cert Higher Level Maths'
abstract: |
  The following is notes on the Algebra 1 section of the leaving cert
  higher level maths course.
  These notes are not endorsed by any teachers, and I have modified them
  and added my own details to these after the classes. All errors are
	almost surely mine.

	You should note that while there may be proofs provided for some statements and theorems, they do not need to be learned for the 
	purpose of examination. These non-essential proofs are just to increase the understanding of the statements being provided.
header-includes:
  - \usepackage{polynom}
---

# Polynomial Expressions

\begin{definition}{Polynomial}
	An expression of the form:

	$$
		a_x x^n + a_{n-1} x^{n - 1} + \dots + a^2 x^2 + a_1 x + a_0
	$$

	Where $a_i \in \mathbb{R}$; $i = 0, 1, 2, \dots, n$; $n \in \mathbb{N}$.
\end{definition}

\begin{definition}{Degree}
	The highest power of the monomials in a polynomial, with non-zero coefficients.
\end{definition}

There are a few specific types of polynomials which you need to know.

* A **linear** polynomial is of degree 1 ($ax + b$)
* A **quadratic** polynomial is of degree 2 ($ax^2 + bx + c$)
* A **cubic** polynomial is of degree 3 ($ax^3 + bx^2 + cx + d$)

There are also names for polynomials based on how many terms they have.

* A **monomial** is a polynomial containing a single term.
* A **binomial** is a polynomial containing two terms.
* A **trinomial** is a polynomial containing three terms.

\begin{definition}{Coefficent}
	A quantity that multiplies the variable in an algebraic expression (for example $4$ in $4x^3$).
\end{definition}

\begin{definition}{Constant Term}
	A term in an algebraic expression that does not contain any modifiable variables.
\end{definition}

## Addition and Subtraction of Polynomial Expressions

Adding and subtracting polynomials involves the combination of like terms by adding their coefficents.

\begin{definition}{Like terms}
	Monomials that contain the same variable raised to the same power.
\end{definition}


\begin{example}{Simplify the following expression:
	$$
		(6x^{2} - 7x + 4) + (7x^{2} - 9x + 8)
	$$
}
	\Solution

	\begin{align*}
		 & (6x^{2} - 7x + 4) + (7x^{2} - 9x + 8)  \\
		 & = (6x^2 + 7x^2) + (-7x - 9x) + (4 + 8) \\
		 & = 13x^2 - 16x^2 + 12
	\end{align*}
\end{example}

## Multiplying Polynomial Expressions

Polynomials are multiplied using the distributive property of addition:

$$
	a(b + c) = ab + ac
$$

\begin{example}{Simplify the following expression: 
	$$(x + 4)(2x + 5)$$
}
	\Solution

	\begin{align*}
		 & (x + 4)(2x + 5)       \\
		 & = 2x^2 + 8x + 5x + 20 \\
		 & = 2x^2 + 13x + 20
	\end{align*}
\end{example}

## Dividing Polynomial Expressions

There are a few cases for the division of polynomials.
Some of these are detailed below, in the form of worked examples.

Remember, the following equalities **do not hold** when the quotient's denominator is zero.
For example, if you have the expression $(2x + 2) \div (x + 1)$, and you simplify it to $2$, you must remember that this expression is **not equal** to two if $x = -1$, as that would be division by zero and thus undefined.

### Denominator is a Factor of Each Term

If the denominator is a factor of each term of the numerator,
the quotient can be simplified by dividing each term of the numerator by the denominator.

\begin{example}{Simplify the following expression: 
	$$
		\frac{-16x^4 + 8x^2 + 2x}{2x}
	$$}
	\Solution
	\begin{align*}
		 & \frac{-16x^4 + 8x^2 + 2x}{2x}                         \\
		 & = \frac{-16x^4}{2x} + \frac{8x^2}{2x} + \frac{2x}{2x} \\
		 & = -7x^3 + 4x + 1
	\end{align*}
\end{example}

### Denominator is a Factor of the Numerator

If the denominator is a factor of the numerator, the quotient can be simplified
by factoring the numerator and then canceling out the factor.

\begin{example}{Simplify the following expression:
	$$
		\frac{15x^2 + 22x + 8}{5x + 4}
	$$}
	\Solution
	\begin{align*}
		 & \frac{15x^2 + 22x + 8}{5x + 4}                      \\
		 & = \frac{(3x + 2)\cancel{(5x + 4)}}{\cancel{5x + 4}} \\
		 & = 3x + 2
	\end{align*}
\end{example}

### Polynomial Long Division

If the other two methods don't work, you can use polynomial long division.
This is a generalized version of the arithmetic technique called long division.

\begin{example}{
	\label{long-div-example}
	Simplify the following expression:
	$(x^3 + x^2 - 2x) \div (x - 1)$
}
	\Solution

	\begin{center}
		\polylongdiv{x^3 + x^2 - 2x}{x - 1}
	\end{center}

	$$
		\therefore \frac{x^3 + x^2 - 2x}{x - 1} = x^2 + 2x
	$$
\end{example}


You should note that it is possible that it doesn't divide in evenly,
in which case the division will leave a *remainder*.
This can just be added at the end. Here is an example of a remainder.


\begin{example}{Simplify the following expression:
	$$
		\frac{x^3 + x^2 - 1}{x - 1}
	$$}

	\Solution
	\begin{center}
		\polylongdiv{x^3+x^2-1}{x-1}
	\end{center}

	$$
		\therefore \frac{x^3 + x^2 - 1}{x - 1} = x^2 + 2x + 2 + \frac{1}{x - 1}
	$$

\end{example}

## Synthetic Division

If the denominator of the expression is $x - a$, where $a \in \mathbb{R}$, then you can use a
division technique called synthetic division.

This technique is generally used in the process of finding the roots of a polynomial.

\begin{example}{
	Complete example \ref{long-div-example} using synthetic division.
}
	\Solution
	\begin{center}
		\polyhornerscheme[x=1]{x^3 + x^2 - 2x}
	\end{center}

	$$
		\therefore \frac{x^3 + x^2 - 2x}{x - 1} = x^2 + 2x
	$$

\end{example}

# Factorising Polynomial Expressions \label{factoring}

\begin{definition}{Factor}
	An algebraic factor is an expression that divides a polynomial leaving no remainder.
\end{definition}

Factorising is a very important part of the LC maths course, not to mention algebra in general.
It is very important that you get good at this skill and become familiar with the
common techniques and patterns that come up.
A few factoring techniques are shown below, most in the form of worked
examples.

## Highest Common Factor

This method can be done by looking for the highest common factor
of each of the expressions and then working backwards from there.

\begin{example}{}
	\begin{align*}
		2x^2 + 6x          & = 2x(x + 3)       \\
		15axy + 2xyb + 4xy & = 2xy(7a + b + 2)
	\end{align*}
\end{example}

## Grouping

An expression can sometimes be factored by breaking the expression up into groups and factoring the individual parts.

\begin{example}{Factor the expression $6x^2y + 3xy^2 -12x - 6y$}
	\Solution
	\begin{align*}
		 & 6x^2y + 3xy^2 -12x - 6y   \\
		 & = 3xy(2x + y) - 6(2x + y) \\
		 & = (2x + y)(2xy - 5)
	\end{align*}
\end{example}

## Difference of Two Squares

\begin{theorem}{Difference of Two Squares}
	An expression of the form $a^2 - b^2$ can be factored into $(a + b)(a - b)$.
\end{theorem}

\begin{proof}
	\begin{align*}
		(a + b)(a - b)
		 & = a(a - b) + b(a - b) \\
		 & = a^2 - ab + ab -b^2  \\
		 & = a^2 - b^2
	\end{align*}
\end{proof}

\begin{example}{}
	\begin{align*}
		x^2 - 36   & = (x + 6)(x - 6)                                    \\
		4x^2 - 81  & = (2x + 9)(2x - 9)                                  \\
		9x^3 - 81x & = 9x(x^2 - 9) = 9x(x + 3)(x - 3)                    \\
		16x^4 - 1  & = (4x^2 + 1)(4x^2 - 1) = (4x^2 + 1)(2x + 1)(2x - 1) \\
	\end{align*}
\end{example}

## Difference of Two Cubes

\begin{theorem}{Difference of Two Cubes}
	An expression of the form $a^3 - b^3$ can be factored into $(a - b)(a^2 + ab + b^2)$
\end{theorem}

\begin{proof}
	\begin{align*}
		(a-b)(a^2 + ab +b^2 )
		 & = a(a^2 + ab +b^2 ) - b(a^2 + ab +b^2 )                        \\
		 & = (a^3 + a^2 b + ab^2) - (a^2b + ab^2 + b^3)                   \\
		 & = (a^3 + \cancel{a^2 b + ab^2}) - (\cancel{a^2b + ab^2} + b^3) \\
		 & = a^3 - b^3
	\end{align*}
\end{proof}

\begin{example}{}
	\begin{align*}
		x^3 - 8        & = (x - 2)(x^2 + 2x + 4)          \\
		125x^3 - 27y^3 & = (5x - 3y)(25x^2 + 15xy + 9y^2)
	\end{align*}
\end{example}

## Sum of Two Cubes

\begin{theorem}{Sum Of Two Cubes}
	An expression of the form $a^3 + b^3$ can be factored into $(a + b)(a^2 - ab + b^2)$
\end{theorem}

\begin{proof}
	\begin{align*}
		(a+b)(a^2 - ab +b^2)
		 & = a(a^2 - ab +b^2 ) + b(a^2 - ab +b^2 )          \\
		 & = a^3 - a^2b + ab^2 + ba^2 - ab^2 + b^3          \\
		 & = a^3 - \cancel{a^2b + ab^2 + ba^2 - ab^2} + b^3 \\
		 & = a^3 + b^3
	\end{align*}
\end{proof}

\begin{example}{}
	\begin{align*}
		27x^3 + 1      & = (3x + 1)(9x^2 - 3x + 1)         \\
		81x^3 + 192b^3 & = (5x + 6b)(25x^2 - 30xb + 36b^2)
	\end{align*}
\end{example}

## Factoring With The Quadratic Formula

If the previous methods don't work and you with to factor a quadratic, you can use ths following method (shown in worked example).

\begin{example}{Factor 
	$3x^2 - 17x + 20$}
	\Solution

	First, you must let the expression equal $0$, and then solve for $x$:

	\begin{align*}
		 & 3x^2 - 17x + 20 = 0                        \\
		 & \implies x
		= \frac{17 \pm \sqrt{(-17)^2 - 4(3)(20)}}{2(3)}
		= \frac{17 \pm 7}{6}                          \\
		 & \implies x = 4 \text{ or } x = \frac{5}{3}
	\end{align*}
	
	From this you can find that if $x = 4$, then $x- 4$ is a factor.
	If $x = \frac{5}{3} \implies 3x = 5$, then $3x - 5$ is a factor

	$$
		\therefore 3x^2 - 17x + 20 = (3x -5)(x - 4)
	$$
\end{example}

# Simplifying Algebraic Fractions

\begin{definition}{Algebraic Fraction}
	An algebraic fraction is an expression of the form:

	$$
		\frac{f(x)}{g(x)}
	$$

	Where $f(x), g(x)$ are expressions in $x$.
\end{definition}

Algebraic fractions are simplified in much the same way as numerical fractions,
and they are added, subtracted, multiplied and divided in the same way also.
The simplification of fractions can be described with a number of rules:

* Fractions can be added once they have a common denominator.
* A fraction can be simplified iff the numerator and denominator have a common factor (this is sometimes referred to as cancelling).
* If the denominator or numerator contains a fraction, they should be reduced before proceeding.

It should be noted that in most cases it is not necessary to expand
fully the expression in the denominator of the fraction, and usually can be
left in factored form.


A few properties can be used during this simplification.

\begin{theorem}{Addition Of Fractions}
	$$
		\frac{a}{b} + \frac{c}{d} = \frac{ad + bc}{bd}
	$$
\end{theorem}

\begin{proof}
	\begin{align*}
		\frac{a}{b} + \frac{c}{d}
		 & = \frac{a}{b} \cdot \frac{d}{d} + \frac{c}{d} \cdot \frac{b}{b} \label{multiplicive-identities} \\
		 & = \frac{ad}{bd} + \frac{bc}{bd}                                                                 \\
		 & = \frac{ad + bc}{bd}
	\end{align*}
\end{proof}

\begin{theorem}{Fractions In The Numerator/Denominator}
	$$
		\frac{\frac{a}{b}}{\frac{c}{d}} = \frac{ad}{bc}
	$$
\end{theorem}

\begin{proof}
	\begin{align*}
		\frac{\frac{a}{b}}{\frac{c}{d}} & = \frac{a}{b} \cdot \frac{1}{\frac{c}{d}} \\
		                                & = \frac{a}{b} \cdot (\frac{c}{d})^{-1}    \\
		                                & = \frac{a}{b} \cdot \frac{d}{c}           \\
		                                & = \frac{ad}{bc}
	\end{align*}
\end{proof}

Here are some examples of following these rules to simplify algebraic fractions.

\begin{example}{Simplify the following expression:
	$$
		\frac{1}{x+2} + \frac{1}{x+3}
	$$}
	\Solution

	\begin{align*}
		  & \frac{1}{x+2} + \frac{1}{x+3}    \\
		= & \frac{(x+2) + (x+3)}{(x+2)(x+3)} \\
		= & \frac{2x+5}{(x+2)(x+3)}
	\end{align*}
\end{example}

\begin{example}{Simplify the following expression:
	$$
		\frac{2x^2 - 5x - 3}{4x^2 - 1}
	$$
}
	\Solution

	\begin{align*}
		\frac{2x^2 - 5x - 3}{4x^2 - 1}
		 & = \frac{(2x + 1)(x-3)}{(2x + 1)(2x - 1)}                   \\
		 & = \frac{\cancel{(2x + 1)}(x-3)}{\cancel{(2x + 1)}(2x - 1)} \\
		 & = \frac{x - 3}{2x - 1}
	\end{align*}
\end{example}

# Binomial Expansion

## The Binomial Coefficient

To understand the binomial expansion theorem, you must be familiar with
the binomial coefficient.
The binomial coefficient is related to combinations. The coefficient:

$$
n\choose r
$$

Represents the number of ways you can choose $r$ objects from a group of $n$ objects.

This coefficient is calculated as:

$$
{n\choose r} = \frac{n!}{r!(n-r)!}
$$

There is a number of properties that you will need to know.

\begin{theorem}{}
	$$
	{n\choose r} = {n \choose n - r}
	$$
\end{theorem}

\begin{proof}
	This theorem has an intuitive proof (which you should read!), along with a formal proof.
	To understand how this works, imagine you have $n$ balls, and you are asked to choose 
	$r$ of them to remove from the group. You could also think of this as choosing $n-r$ of them
	to keep. Thus, choosing $r$ objects out of $n$ is equivalent to choosing $n-r$ objects out of $n$.\\

	Formally, you can show this theorem algebraically:
	\begin{align*}
		{n\choose r} &= \frac{n!}{r!(n-r)!}\\
		\implies {n\choose n-r} &= \frac{n!}{(n-r)!(n-(n-r))!}\\
		&= \frac{n!}{(n-r)!r!}
	\end{align*}
\end{proof}

It is also possible to calculate this coefficient in an alternate way, which can be useful for calculating this coefficient without a calculator.

$$
{n\choose r} =  \frac{n(n-1)(n-2)\dots(n-(k - 1))}{k(k-1)(k-2) \dots 1}
$$

\begin{example}{{Without a calculator, find $$ 7 \choose 4$$}}
	\Solution

	\begin{align*}
	{7 \choose 4} &= \frac{7 \cdot 6 \cdot 5 \cdot 4}{4 \cdot 3 \cdot 2 \cdot 1}\\
	&= \frac{840}{24}	\\
	&= 35
	\end{align*}
\end{example}

\begin{example}{{Without a calculator, find $$ 15 \choose 11$$}}
	\Solution

	\begin{align*}
	{15 \choose 11} &= {15 \choose 4} \\
	&= \frac{15 \cdot 14 \cdot 13 \cdot 12}{4 \cdot 3 \cdot 2 \cdot 1}\\
	&= 1365
	\end{align*}
\end{example}