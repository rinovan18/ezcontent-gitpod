<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @molecules/13-FooterBottom/00-footer-bottom-menu-item.twig */
class __TwigTemplate_92bcff9d814530011eedc8c59db565f7ece6b429212452fc244770c555ad27d4 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["footermenu"] ?? null), "footerBottom", [], "any", false, false, true, 1));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["key"] => $context["value"]) {
            // line 2
            echo "  <li ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["value"], "attributes", [], "any", false, false, true, 2), 2, $this->source), "html", null, true);
            echo ">
    ";
            // line 3
            $this->loadTemplate("@atoms/12-links/00-links.twig", "@molecules/13-FooterBottom/00-footer-bottom-menu-item.twig", 3)->display(twig_array_merge($context, ["text" => twig_get_attribute($this->env, $this->source,             // line 4
$context["value"], "text", [], "any", false, false, true, 4), "class" => twig_get_attribute($this->env, $this->source,             // line 5
$context["value"], "class", [], "any", false, false, true, 5), "url" => twig_get_attribute($this->env, $this->source,             // line 6
$context["value"], "url", [], "any", false, false, true, 6)]));
            // line 8
            echo "  </li>
";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['value'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "@molecules/13-FooterBottom/00-footer-bottom-menu-item.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  66 => 8,  64 => 6,  63 => 5,  62 => 4,  61 => 3,  56 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "@molecules/13-FooterBottom/00-footer-bottom-menu-item.twig", "/var/www/html/ezcontent-demo/MY_PROJECT/docroot/themes/contrib/ezcontent_theme/pattern-lab/source/_patterns/01-molecules/13-FooterBottom/00-footer-bottom-menu-item.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 1, "include" => 3);
        static $filters = array("escape" => 2);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for', 'include'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
