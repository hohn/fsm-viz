from setuptools import setup
import glob

setup(name='fsm_viz',
      version='0.1',
      description='A library to set up finite state machines and generate animated views using graphviz',
      url='https://github.com/hohn/fsm-viz',
      author='Michael Hohn',
      author_email='hohn@github.com',
      license='MIT',
      packages=['fsm_viz'],
      install_requires=[],
      include_package_data=True,
      scripts=glob.glob("bin/fsmviz-*"),
      zip_safe=False,
      python_requires='>=3.9'
      )
