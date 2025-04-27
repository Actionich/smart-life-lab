const aiNewsList = [
  {
    id: 'openai-gpt5',
    title: 'OpenAI, GPT-5 공개 임박!',
    description: 'OpenAI가 GPT-5를 상반기에 출시할 예정이라고 발표했습니다.',
    fullDescription: 'GPT-5는 연산 능력, 멀티모달 처리, 안전성에서 큰 진전을 이뤘으며 다양한 언어를 지원할 예정입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'google-gemini15',
    title: 'Google, Gemini 1.5 발표',
    description: 'Google DeepMind가 Gemini 1.5 모델을 공개했습니다.',
    fullDescription: 'Gemini 1.5는 긴 문맥 처리와 빠른 추론에서 뛰어난 성능을 보여주며, 연내 상용 API 제공이 예정되어 있습니다.',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'anthropic-claude3',
    title: 'Anthropic, Claude 3 공개',
    description: 'Anthropic이 Claude 3 모델을 출시하며 시장 점유율을 확대하고 있습니다.',
    fullDescription: 'Claude 3는 뛰어난 추론 능력과 정밀한 응답 품질로 GPT-4를 넘는 성능을 지향합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1581090700227-1b57b92f3b79?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'meta-llama3',
    title: 'Meta, LLaMA 3 공개',
    description: 'Meta가 오픈소스 초거대 모델 LLaMA 3를 공개했습니다.',
    fullDescription: '400억 파라미터 이상을 가진 LLaMA 3는 다양한 연구 개발 분야에서 활용되고 있습니다.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'amazon-olympus',
    title: 'Amazon, Olympus 초거대 AI 공개',
    description: 'Amazon이 사상 최대 규모의 AI 모델 Olympus를 공개했습니다.',
    fullDescription: 'Olympus는 1조 파라미터를 넘어서는 초대형 모델로, AWS를 통해 제공됩니다.',
    thumbnail: 'https://images.unsplash.com/photo-1615800009134-01b063f90427?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'nvidia-blackwell',
    title: 'NVIDIA, Blackwell AI 칩 공개',
    description: 'NVIDIA가 차세대 AI 슈퍼칩 Blackwell을 공개했습니다.',
    fullDescription: 'Blackwell은 초거대 AI 모델 훈련을 위한 최고 성능을 자랑하며, 업계 표준을 재정의할 것으로 기대됩니다.',
    thumbnail: '/nvidia.jpg' // 로컬 public 폴더에 있는 이미지 사용
  },
  {
    id: 'openai-sora',
    title: 'OpenAI, 비디오 생성 AI Sora 공개',
    description: 'OpenAI가 텍스트로부터 비디오를 생성하는 AI 모델 Sora를 발표했습니다.',
    fullDescription: 'Sora는 자연어 명령을 기반으로 고품질의 비디오를 생성할 수 있는 새로운 형태의 멀티모달 모델입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1612831661266-03c1cc6a9d35?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mistral-mixtral',
    title: 'Mistral, Mixtral 8x7B 모델 공개',
    description: 'Mistral이 전문가 집단(MoE) 아키텍처 기반 Mixtral 8x7B 모델을 발표했습니다.',
    fullDescription: 'Mixtral은 일부 경로만 활성화하는 방식으로 효율성을 극대화했으며, 오픈소스로 제공되어 연구자들에게 큰 주목을 받고 있습니다.',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
  }
];

export default aiNewsList;

